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
        geo: {
          center: [ 39.8283, -98.5795 ],
          regions: [
            [ 37.0902, -95.7129 ], // United States
            [ 55.3781, -3.436 ], // United Kingdom
            [ -25.2744, 133.7751 ], // Australia
          ],
        },
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
        geo: {
          center: [ 46.2276, 2.2137 ],
          regions: [
            [ 46.2276, 2.2137 ], // France
            [ 50.5039, 4.4699 ], // Belgium
            [ 46.8182, 8.2275 ], // Switzerland
          ],
        },
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
        geo: {
          center: [ 40.4637, -3.7492 ],
          regions: [
            [ 40.4637, -3.7492 ], // Spain
            [ 23.6345, -102.5528 ], // Mexico
            [ -34.6037, -58.3816 ], // Argentina
          ],
        },
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
        geo: {
          center: [ 36.2048, 138.2529 ],
          regions: [
            [ 35.6762, 139.6503 ], // Tokyo
            [ 34.6937, 135.5023 ], // Osaka
            [ 43.0618, 141.3545 ], // Sapporo
          ],
        },
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
        geo: {
          center: [ 35.8617, 104.1954 ],
          regions: [
            [ 39.9042, 116.4074 ], // Beijing
            [ 31.2304, 121.4737 ], // Shanghai
            [ 23.1291, 113.2644 ], // Guangzhou
          ],
        },
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
        geo: {
          center: [ 36.5, 127.8 ],
          regions: [
            [ 37.5665, 126.978 ], // Seoul
            [ 35.1796, 129.0756 ], // Busan
            [ 35.8714, 128.6014 ], // Daegu
          ],
        },
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
        geo: {
          center: [ 51.1657, 10.4515 ],
          regions: [
            [ 52.52, 13.405 ], // Berlin
            [ 48.1351, 11.582 ], // Munich
            [ 50.1109, 8.6821 ], // Frankfurt
          ],
        },
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
        geo: {
          center: [ 61.524, 105.3188 ],
          regions: [
            [ 55.7558, 37.6173 ], // Moscow
            [ 59.9343, 30.3351 ], // Saint Petersburg
            [ 56.8389, 60.6057 ], // Yekaterinburg
          ],
        },
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
        geo: {
          center: [ 39.3999, -8.2245 ],
          regions: [
            [ 38.7223, -9.1393 ], // Lisbon
            [ -23.5505, -46.6333 ], // Sao Paulo
            [ -22.9068, -43.1729 ], // Rio de Janeiro
          ],
        },
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
        geo: {
          center: [ 61.9241, 25.7482 ],
          regions: [
            [ 60.1699, 24.9384 ], // Helsinki
            [ 61.4978, 23.761 ], // Tampere
            [ 65.0121, 25.4651 ], // Oulu
          ],
        },
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
        geo: {
          center: [ 52.1326, 5.2913 ],
          regions: [
            [ 52.3676, 4.9041 ], // Amsterdam
            [ 51.9225, 4.47917 ], // Rotterdam
            [ 52.5166, 5.1913 ], // Utrecht
          ],
        },
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
        geo: {
          center: [ 60.1282, 18.6435 ],
          regions: [
            [ 59.3293, 18.0686 ], // Stockholm
            [ 57.7089, 11.9746 ], // Gothenburg
            [ 55.6052, 13.0001 ], // Malmö
          ],
        },
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
        geo: {
          center: [ 51.9194, 19.1451 ],
          regions: [
            [ 52.2297, 21.0122 ], // Warsaw
            [ 51.1079, 17.0385 ], // Wrocław
            [ 50.0647, 19.945 ], // Kraków
          ],
        },
        files: [
          'global/global-pl.json',
          'meta/meta-pl.json',
          'pages/pages-pl.json',
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
