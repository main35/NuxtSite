export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'preconnect', href: 'https://api.iconify.design', crossorigin: '' },
        { rel: 'preconnect', href: 'https://fonts.asboy2035.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://api.iconify.design' },
        { rel: 'dns-prefetch', href: 'https://fonts.asboy2035.com' },
        { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ]
    },
  },
  compatibilityDate: '2025-11-27',
  runtimeConfig: {
    public: {
      posthogPublicKey: 'phc_M5dK6A49VD1zj7L5iamsBbIO4RhikB8FbxUyVfTlEZy',
      posthogHost: 'https://us.i.posthog.com',
      posthogDefaults: '2025-05-24'
    }
  },
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
  vite: {
    build: {
      sourcemap: 'inline'
    }
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
