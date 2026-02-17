import { fileURLToPath } from 'node:url'

import { defineNuxtConfig } from 'nuxt/config'

import meta from './package'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {},
      link: [
        {
          rel: 'preconnect',
          href: 'https://api.iconify.design',
          crossorigin: '',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.asboy2035.com',
          crossorigin: '',
        },
        { rel: 'dns-prefetch', href: 'https://api.iconify.design' },
        { rel: 'dns-prefetch', href: 'https://fonts.asboy2035.com' },
        { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
      ],
    },
  },
  compatibilityDate: '2026-02-26',
  runtimeConfig: {
    public: {
      siteVersion: meta.version,
      siteRelease: "a35hie's Site v6",
      posthogPublicKey: 'phc_M5dK6A49VD1zj7L5iamsBbIO4RhikB8FbxUyVfTlEZy',
      posthogHost: 'https://us.i.posthog.com',
      posthogDefaults: '2025-05-24',
    },
  },
  modules: [ '@vite-pwa/nuxt', 'floating-vue/nuxt', '@nuxtjs/i18n' ],
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
    $: fileURLToPath(new URL('./data', import.meta.url)),
    ':': fileURLToPath(new URL('./types', import.meta.url)),
    '+': fileURLToPath(new URL('./components', import.meta.url)),
    '&': fileURLToPath(new URL('./utils', import.meta.url)),
  },
  i18n: {
    strategy: 'prefix_except_default',
    baseUrl: 'https://a35hie.me',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'en',
    },
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
        files: [
          'global/global-en.json',
          'meta/meta-en.json',
          'pages/pages-en.json',
        ],
      },
      {
        code: 'fr',
        name: 'Français',
        language: 'fr-FR',
        files: [
          'global/global-fr.json',
          'meta/meta-fr.json',
          'pages/pages-fr.json',
        ],
      },
      {
        code: 'es',
        name: 'Español',
        language: 'es-ES',
        files: [
          'global/global-es.json',
          'meta/meta-es.json',
          'pages/pages-es.json',
        ],
      },
      {
        code: 'jp',
        name: '日本語',
        language: 'jp-JP',
        files: [
          'global/global-jp.json',
          'meta/meta-jp.json',
          'pages/pages-jp.json',
        ],
      },
      {
        code: 'cn',
        name: '中文',
        language: 'zh-CN',
        files: [
          'global/global-cn.json',
          'meta/meta-cn.json',
          'pages/pages-cn.json',
        ],
      },
      {
        code: 'kr',
        name: '한국어',
        language: 'ko-KR',
        files: [
          'global/global-kr.json',
          'meta/meta-kr.json',
          'pages/pages-kr.json',
        ],
      },
      {
        code: 'de',
        name: 'Deutsch',
        language: 'de-DE',
        files: [
          'global/global-de.json',
          'meta/meta-de.json',
          'pages/pages-de.json',
        ],
      },
      {
        code: 'ru',
        name: 'Русский',
        language: 'ru-RU',
        files: [
          'global/global-ru.json',
          'meta/meta-ru.json',
          'pages/pages-ru.json',
        ],
      },
      {
        code: 'pt',
        name: 'Português',
        language: 'pt-PT',
        files: [
          'global/global-pt.json',
          'meta/meta-pt.json',
          'pages/pages-pt.json',
        ],
      },
      {
        code: 'fi',
        name: 'Suomi',
        language: 'fi-FI',
        files: [
          'global/global-fi.json',
          'meta/meta-fi.json',
          'pages/pages-fi.json',
        ],
      },
      {
        code: 'nl',
        name: 'Nederlands',
        language: 'nl-NL',
        files: [
          'global/global-nl.json',
          'meta/meta-nl.json',
          'pages/pages-nl.json',
        ],
      },
      {
        code: 'sv',
        name: 'Svenska',
        language: 'sv-SE',
        files: [
          'global/global-sv.json',
          'meta/meta-sv.json',
          'pages/pages-sv.json',
        ],
      },
      {
        code: 'uwu',
        name: 'Catspeak :3',
        language: 'ca-ES',
        files: [
          'global/global-ca-uw.json',
          'meta/meta-ca-uw.json',
          'pages/pages-ca-uw.json',
        ],
      },
      {
        code: 'pl',
        name: 'Polski',
        language: 'pl-PL',
        files: [
          'global/global-pl.json',
          'meta/meta-pl.json',
          'pages/pages-pl.json',
        ],
      },
      {
        code: 'pir',
        name: 'Piratespeak',
        language: 'en-Pirate',
        files: [
          'global/global-pirate.json',
          'meta/meta-pirate.json',
          'pages/pages-pirate.json',
        ],
      },
      {
        code: 'emj',
        name: '😚😋',
        language: 'en-Emoji',
        files: [
          'global/global-emoji.json',
          'meta/meta-emoji.json',
          'pages/pages-emoji.json',
        ],
      },
    ],
    langDir: 'locales/',
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Toolbox - Ash',
      short_name: 'Toolbox',
      description: "a35hie's Toolbox app.",
      theme_color: '#9f75e8',
      start_url: '/toolbox',
      icons: [
        {
          src: '/images/icons/Toolbox.png',
          sizes: '1024x1024',
          type: 'image/png',
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: [ '@/styles/global.sass' ],
  vite: {
    build: {
      sourcemap: 'inline',
    },
  },
  nitro: {
    compressPublicAssets: true,
    publicAssets: [
      {
        dir: 'public',
        baseURL: '/',
      },
    ],
    externals: {
      inline: [ 'vue' ],
    },
  },
})
