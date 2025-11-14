// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/ui",
    "nuxt-auth-sanctum",
  ],
  css: ["~/assets/css/main.css"],
  sanctum: {
    baseUrl: "http://localhost:8000",
  },
});
