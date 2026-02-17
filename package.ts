import { definePackage } from '@a35hie/ts-pkg'

function fixPathScript(search: string, replace: string): string {
  return `replace-in-files --string='${search}' --replacement='${replace}' './**/*.{js,ts,vue}' '!./package.*'`
}

export default definePackage({
  name: '@a35hie/nuxt-site',
  description: 'My personal website.',
  author: {
    name: 'ash',
    email: 'ash@a35.dev',
    url: 'https://a35.dev/',
  },
  version: '6.2.2',
  license: 'Apache-2.0',
  private: false,
  type: 'module',

  repository: {
    type: 'git',
    url: 'https://github.com/main35/NuxtSite',
  },

  scripts: {
    // code runs
    dev: 'nuxi dev --host 0.0.0.0 --port 5173',
    preview: 'bun run build && nuxt preview --port 4173',
    build: 'nuxt build',
    ci: 'bun install && bun run build',

    // code style
    prettier:
      'prettier --write --experimental-cli --ignore-path .prettierignore .',
    fixPaths: [
      fixPathScript('@/data/', '$/'),
      fixPathScript('@/types/', ':/'),
      fixPathScript('@/components/', '+/'),
      fixPathScript('@/utils/', '&/'),
    ].join(' && '),
    lint: 'eslint . --fix',
    format: 'bun run prettier && bun run fixPaths && bun run lint',
    fastFormat: 'bun run prettier && bun run lint',

    // code prep
    verifyTranslations: 'bun run utils/verifyTranslations.ts',
    generate: 'nuxt generate',
    postinstall: 'nuxt prepare',
  },

  dependencies: {
    '@a35hie/ts-pkg': '^0.3.1',
    '@iconify/vue': '^5.0.0',
    '@nuxtjs/i18n': '^10.2.3',
    cobe: '^0.6.5',
    'floating-vue': '^5.2.2',
    html2canvas: '^1.4.1',
    marked: '^17.0.2',
    'postcss-load-config': '^6.0.1',
    'posthog-js': '^1.347.1',
    vue: '^3.5.28',
    'vue-progressive-blur': '^1.0.2',
    'vue-router': '^5.0.2',
  },

  devDependencies: {
    '@types/node': '^24.10.13',
    '@typescript-eslint/parser': '^8.55.0',
    '@vite-pwa/nuxt': '^1.1.1',
    eslint: '^10.0.0',
    'eslint-plugin-import': '^2.32.0',
    'eslint-plugin-simple-import-sort': '^12.1.1',
    nuxt: '^4.3.1',
    'postcss-import': '^16.1.1',
    prettier: '^3.8.1',
    'replace-in-files-cli': '^4.0.0',
    sass: '^1.97.3',
    'vue-eslint-parser': '^10.3.0',
  },
})
