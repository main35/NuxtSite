import { definePackage } from '@a35hie/ts-pkg'

export default definePackage({
  name: '@a35hie/nuxt-site',
  description: 'My personal website.',
  version: '6.1.1',
  license: 'Apache-2.0',
  private: false,
  type: 'module',

  author: {
    name: 'ash',
    email: 'ash@a35.dev',
    url: 'https://a35.dev/',
  },

  repository: {
    type: 'git',
    url: 'https://github.com/main35/NuxtSite',
  },

  scripts: {
    build: 'nuxt build',
    ci: 'bun install && bun run build',
    dev: 'nuxi dev --host 0.0.0.0 --port 5173',
    preview: 'bun run build && nuxt preview --port 4173',
    prettier:
      'prettier --write --experimental-cli --ignore-path .prettierignore .',
    fixPaths:
      "replace-in-files --string='$/' --replacement='$/' './**/*.{js,ts,vue}' && " +
      "replace-in-files --string=':/' --replacement=':/' './**/*.{js,ts,vue}' && " +
      "replace-in-files --string='+/' --replacement='+/' './**/*.{js,ts,vue}' && " +
      "replace-in-files --string='&/' --replacement='&/' './**/*.{js,ts,vue}'",
    lint: 'eslint . --fix',
    format: 'bun run prettier && bun run fixPaths && bun run lint',
    verifyTranslations: 'bun run utils/verifyTranslations.ts',
    generate: 'nuxt generate',
    postinstall: 'nuxt prepare',
  },

  dependencies: {
    '@a35hie/ts-pkg': '^0.3.0',
    '@iconify/vue': '^5.0.0',
    '@nuxtjs/i18n': '^10.2.1',
    'cobe': '^0.6.5',
    'floating-vue': '^5.2.2',
    'html2canvas': '^1.4.1',
    'marked': '^15.0.12',
    'postcss-load-config': '^6.0.1',
    'posthog-js': '^1.298.1',
    'vue': '^3.5.26',
    'vue-progressive-blur': '^1.0.2',
    'vue-router': '^4.5.1',
  },

  devDependencies: {
    '@types/node': '^24.10.0',
    '@typescript-eslint/parser': '^8.54.0',
    '@vite-pwa/nuxt': '^1.1.0',
    'eslint': '^9.39.2',
    'eslint-plugin-import': '^2.32.0',
    'eslint-plugin-simple-import-sort': '^12.1.1',
    'nuxt': '^4.3.0',
    'postcss-import': '^16.1.1',
    'prettier': '^3.7.4',
    'replace-in-files-cli': '^4.0.0',
    'sass': '^1.89.0',
    'vue-eslint-parser': '^10.2.0',
  },
})
