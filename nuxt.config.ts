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
    prerender: {
      routes: [
        '/_ipx/f_webp,q_80/images/screenshot_1.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_1.png',
        '/_ipx/f_webp,q_80/images/screenshot_2.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_2.png',
        '/_ipx/f_webp,q_80/images/screenshot_3.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_3.png',
        '/_ipx/f_webp,q_80/images/screenshot_4.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_4.png',
        '/_ipx/f_webp,q_80/images/screenshot_5.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_5.png',
        '/_ipx/f_webp,q_80/images/screenshot_6.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_6.png',
        '/_ipx/f_webp,q_80/images/screenshot_7.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_7.png',
        '/_ipx/f_webp,q_80/images/screenshot_8.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_8.png',
        '/_ipx/f_webp,q_80/images/screenshot_9.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_9.png',
        '/_ipx/f_webp,q_80/images/screenshot_10.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_10.png',
        '/_ipx/f_webp,q_80/images/screenshot_11.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_11.png',
        '/_ipx/f_webp,q_80/images/screenshot_12.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_12.png',
        '/_ipx/f_webp,q_80/images/screenshot_13.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_13.png',
        '/_ipx/f_webp,q_80/images/screenshot_15.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_15.png',
        '/_ipx/f_webp,q_80/images/screenshot_16.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_16.png',
        '/_ipx/f_webp,q_80/images/screenshot_17.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_17.png',
        '/_ipx/f_webp,q_80/images/screenshot_18.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_18.png',
        '/_ipx/f_webp,q_80/images/screenshot_19.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_19.png',
        '/_ipx/f_webp,q_80/images/screenshot_21.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_21.png',
        '/_ipx/f_webp,q_80/images/screenshot_22.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_22.png',
        '/_ipx/f_webp,q_80/images/screenshot_23.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_23.png',
        '/_ipx/f_webp,q_80/images/screenshot_24.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_24.png',
        '/_ipx/f_webp,q_80/images/screenshot_25.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_25.png',
        '/_ipx/f_webp,q_80/images/screenshot_26.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_26.png',
        '/_ipx/f_webp,q_80/images/screenshot_27.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_27.png',
        '/_ipx/f_webp,q_80/images/screenshot_28.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_28.png',
        '/_ipx/f_webp,q_80/images/screenshot_29.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_29.png',
        '/_ipx/f_webp,q_80/images/screenshot_30.png',
        '/_ipx/f_webp,q_90,w_1200/images/screenshot_30.png'
      ]
    }
  },

  
})