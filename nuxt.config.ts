// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
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
    storage: {
      projectsData: {
        driver: 'fs',
        base: './app/data/projects',
      },
    },
  },
  runtimeConfig: {
    googleFormUrl: '',
  },
})
