import type { Technology } from ':/technology'

// Languages / Frameworks
export const Vue: Technology = {
  name: 'Vue / Nuxt',
  icon: 'proicons:vuejs',
  colorIcon: 'logos:vue',
  link: 'https://vuejs.org/',
}

export const TypeScript: Technology = {
  name: 'TypeScript',
  icon: 'proicons:typescript',
  colorIcon: 'skill-icons:typescript',
  link: 'https://www.typescriptlang.org/',
}

export const Swift: Technology = {
  name: 'Swift',
  icon: 'iconoir:apple-swift',
  colorIcon: 'skill-icons:swift',
  link: 'https://www.swift.org/',
}

export const Cpp: Technology = {
  name: 'C++',
  icon: 'bxl:c-plus-plus',
  colorIcon: 'devicon:cplusplus',
  link: 'https://cplusplus.com/',
}

export const Python: Technology = {
  name: 'Python',
  icon: 'proicons:python',
  colorIcon: 'logos:python',
  link: 'https://www.python.org/',
}

export const SQL: Technology = {
  name: '(PG) SQL',
  icon: 'tabler:file-type-sql',
  colorIcon: 'logos:postgresql',
  link: 'https://www.sqlite.org/index.html',
}

export const Go: Technology = {
  name: 'Go',
  icon: 'nonicons:go-16',
  colorIcon: 'devicon:go',
  isLearning: true,
}

export const Rust: Technology = {
  name: 'Rust',
  icon: 'fluent-mdl2:rust-language-logo',
  isLearning: true,
}

// Other technologies
export const Elysia: Technology = {
  name: 'Elysia',
  icon: 'skill-icons:elysia-light',
  link: 'https://elysiajs.com/',
  isLearning: true,
}

export const Langs: Technology[] = [
  Vue,
  TypeScript,
  Swift,
  Cpp,
  Python,
  SQL,
  Go,
  Rust,
]
