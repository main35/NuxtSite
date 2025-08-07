export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'preconnect', href: 'https://api.iconify.design', crossorigin: '' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://api.iconify.design' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ]
    },
  },
  compatibilityDate: '2025-05-15',
  modules: [ '@vite-pwa/nuxt' ],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Toolbox ∙ asboy2035',
      short_name: 'Toolbox',
      description: 'asboy2035 Toolbox app.',
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
  css: [
    "@/styles/global.sass"
  ],
  nitro: {
    compressPublicAssets: true,
    publicAssets: [
      {
        dir: 'public',
        baseURL: '/',
      },
    ],
    routeRules: {
      '/images/**': {
        headers: {
          'cache-control': 'public, max-age=604800, immutable'
        }
      },
      '/PageBackground.svg': {
        headers: {
          'cache-control': 'public, max-age=604800, immutable'
        }
      }
    }
  },
})
