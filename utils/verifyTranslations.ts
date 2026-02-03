import type { NuxtConfig } from '@nuxt/schema'
import fs from 'fs'
import path from 'path'
import process from 'process'

type JsonObject = Record<string, any>

function readJson(filePath: string): JsonObject {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

function collectKeys(obj: JsonObject, prefix = ''): Set<string> {
  const keys = new Set<string>()

  for (const [ key, value ] of Object.entries(obj)) {
    const fullKey: string = prefix ? `${prefix}.${key}` : key
    keys.add(fullKey)

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      for (const nested of collectKeys(value, fullKey)) {
        keys.add(nested)
      }
    }
  }

  return keys
}

function color(text: string, code: number): string {
  return `\x1b[${code}m${text}\x1b[0m`
}

export async function verifyTranslations(): Promise<boolean> {
  const baseDir: string = path.resolve(process.cwd(), 'i18n/locales')

  const nuxtConfigModule = await import(
    path.resolve(process.cwd(), 'nuxt.config.ts')
  )
  const nuxtConfig: NuxtConfig = nuxtConfigModule.default ?? nuxtConfigModule

  if (!nuxtConfig.i18n || !Array.isArray(nuxtConfig.i18n.locales)) {
    throw new Error('i18n.locales not found or invalid in nuxt.config.ts')
  }

  const languages = nuxtConfig.i18n.locales.map((l: any) => l.code)

  let valid: boolean = true

  for (const namespace of fs.readdirSync(baseDir)) {
    const namespaceDir: string = path.join(baseDir, namespace)
    if (!fs.statSync(namespaceDir).isDirectory()) continue

    const files: string[] = fs
      .readdirSync(namespaceDir)
      .filter((f: string) => f.endsWith('.json'))

    const perLang = new Map<string, Set<string>>()

    for (const file of files) {
      const match: RegExpMatchArray = file.match(
        /^(.*)-([a-zA-Z0-9_-]+)\.json$/
      )!
      if (!match) continue

      const [ , , lang ] = match
      if (!languages.includes(lang)) continue

      const keys: Set<string> = collectKeys(
        readJson(path.join(namespaceDir, file))
      )
      perLang.set(lang!, keys)
    }

    const baseLang = 'en'
    const referenceLang = perLang.has(baseLang)
      ? baseLang
      : languages.find((l: string) => perLang.has(l!))!

    if (!referenceLang) continue

    const unionKeys = new Set<string>()
    for (const keys of perLang.values()) {
      for (const k of keys) unionKeys.add(k)
    }

    const referenceKeys = unionKeys

    for (const lang of languages) {
      const keys = perLang.get(lang!)

      if (!keys) {
        valid = false
        console.log(
          color(`\n[${namespace}] Missing file for language: ${lang}`, 31)
        )
        continue
      }

      const allKeys = new Set([ ...referenceKeys, ...keys ])
      const missing = [ ...allKeys ].filter(
        (k) => referenceKeys.has(k) && !keys.has(k)
      )
      const extra = [ ...allKeys ].filter(
        (k) => !referenceKeys.has(k) && keys.has(k)
      )

      if (missing.length || extra.length) {
        valid = false
        console.log(color(`\n[${namespace}] Schema mismatch (${lang})`, 31))

        if (missing.length) {
          console.log(color('  Missing keys:', 33))
          missing.forEach((k) => console.log(color(`   - ${k}`, 33)))
        }

        if (extra.length) {
          console.log(color('  Extra keys:', 36))
          extra.forEach((k) => console.log(color(`   + ${k}`, 36)))
        }
      }
    }
  }

  if (valid) {
    console.log(color('✓ All translation schemas match', 32))
  }

  return valid
}

await verifyTranslations()
