// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    private : {
      API_SECRET_URL: process.env.NUXT_API_KEY,
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Mohamed Chettah - Développeur Web Freelance',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'En tant que développeur web freelance, je crée des sites et applis sur mesure pour concrétiser vos idées en ligne.' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  image: {
    // Options
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','@fortawesome/fontawesome-svg-core/styles.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-simple-sitemap',
    '@nuxt/image'
  ],
  plugins : [
    '~/plugins/fontawesome.js',
    '~/plugins/splide.js',
  ],
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
})

