// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  css: [
      '~/assets/css/main.css',
      '~/assets/css/dracula.css'
  ],

  modules: [
    '@nuxt/content',
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
    markdown: {
      
    },
    locales:[
      'es', 'en'
    ],
    defaultLocale: 'es',
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'es',
        name: 'Español'
      }
    ],
    strategy: 'prefix',
    defaultLocale: 'es',
  },

  compatibilityDate: '2024-08-18'
})