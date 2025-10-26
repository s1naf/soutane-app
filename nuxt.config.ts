// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    'nuxt-swiper'
  ],
  // Σημαντικό για GitHub Pages project site: user.github.io/soutane-app/
  app: {
    baseURL: '/soutane-app/'
  },
  // Παραγωγή στατικών αρχείων με σωστές ρυθμίσεις για GitHub Pages
  nitro: {
    preset: 'github_pages',
    
  }

  
})