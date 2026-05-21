// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },
  devtools: { enabled: true },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    'nuxt-gtag',
  ],
  css: ['~/assets/css/main.css'],
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json' },
      { code: 'fr', language: 'fr-FR', file: 'fr.json' },
    ],
    defaultLocale: 'fr',
    types: 'composition',
  },
  nitro: {
    serverAssets: [
      {
        baseName: 'projects',
        dir: 'assets/data/projects',
      },
    ],
  },
  runtimeConfig: {
    googleFormUrl: '',
  },

  gtag: {
    id: "G-L9HTMHNS12",
  },
})