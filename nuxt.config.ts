import meta from './package.json'

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
        { rel: 'manifest', href: '/manifest.webmanifest' },
      ],
    },
  },
  compatibilityDate: '2026-01-05',
  runtimeConfig: {
    public: {
      siteVersion: meta.version,
      siteRelease: "a35hie's Site v6 Beta",
      posthogPublicKey: 'phc_M5dK6A49VD1zj7L5iamsBbIO4RhikB8FbxUyVfTlEZy',
      posthogHost: 'https://us.i.posthog.com',
      posthogDefaults: '2025-05-24',
    },
  },
  modules: ['@vite-pwa/nuxt', 'floating-vue/nuxt', '@nuxtjs/i18n'],
  i18n: {
    strategy: 'prefix_except_default',
    baseUrl: 'https://asboy2035.com',
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
        files: ['global-en.json', 'meta-en.json', 'pages-en.json'],
      },
      {
        code: 'fr',
        name: 'Français',
        language: 'fr-FR',
        files: ['global-fr.json', 'meta-fr.json', 'pages-fr.json'],
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
  css: ['@/styles/global.sass'],
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
  },
})
