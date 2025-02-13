// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-02-13',
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
      htmlAttrs: {
        lang: 'fr'
      },
      title: "Ambre & Compagnie | Garde à domicile - Tournefeuille",
      meta: [
        { name: 'description', content: 'Présentation des services petsitter (visite/promenade animaux à domicile) à Tournefeuille, Colomiers, Plaisance-du-touch, Salvetat-saint-gilles)' },
        { name: 'keywords', content: 'garde, chien, chat, tournefeuille, domicile' },
        { name: 'author', content: 'Ambre&Cie' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Ambre & Compagnie  Garde à domicile - Tournefeuille' },
        { property: 'og:description', content: 'Visite à domicile pour chien et chat' },
      ],
    }
  },
  modules: ['@nuxt/ui'],
  devServer: {
    host: '0.0.0.0',  // Permet à Nuxt d'écouter sur toutes les interfaces réseau
    port: 3000,       // Port sur lequel le serveur écoute (tu peux le changer si tu veux)
  }
})