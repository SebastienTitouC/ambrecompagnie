// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/modern-normalize.css',
    '~/assets/css/main.css',
    '~/assets/css/fonts.css',
    '~/assets/css/utils.css'],

  router: {
    options: {
      linkActiveClass: 'active__link',
      linkExactActiveClass: 'exact__active__link',
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Ambre & Compagnie | Garde à domicile - Tournefeuille"
    }
  },
  modules: ['@nuxt/ui'],
  devServer: {
    host: '0.0.0.0',  // Permet à Nuxt d'écouter sur toutes les interfaces réseau
    port: 3000,       // Port sur lequel le serveur écoute (tu peux le changer si tu veux)
  }
})
