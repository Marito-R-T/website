// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    baseURL: '/website/',
    cdnURL: 'https://main--maritowebsite.netlify.app/'
  },

  devtools: { enabled: true },
  
  css: [
      '~/assets/css/main.css',
  ],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxthq/studio',
    "@nuxt/image",
    "@nuxtjs/i18n"
  ],

  colorMode: {
    classSuffix: ''
  },

  // https://content.nuxtjs.org
  content: {
    documentDriven: true,
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: {
        dark: 'github-dark',
        default: 'github-light'
      }
    },
    locales:[
      'es', 'en'
    ],
    defaultLocale: 'es',
  },
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json',
        name: 'English',
      },
      {
        code: 'es',
        file: 'es.json',
        name: 'Español'
      }
    ],
    strategy: 'prefix',
    defaultLocale: 'en',
    langDir: 'locales/'
  },

  compatibilityDate: '2024-08-18'
})