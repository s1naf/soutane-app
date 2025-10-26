// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    baseURL: '/soutane-app/',
  },
  
  modules: [
    '@nuxt/image',
    'nuxt-swiper'
  ]
})