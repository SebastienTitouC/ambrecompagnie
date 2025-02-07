// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/modern-normalize.css',
    '~/assets/css/main.css',
    '~/assets/css/fonts.css',
    '~/assets/css/utils.css'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Ambre & Compagnie | Garde à domicile - Tournefeuille"
    }
  }

})
