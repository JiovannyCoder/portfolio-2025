// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/scripts",
    "@nuxt/ui",
  ],
  css: ["~/assets/css/main.css"],
});
