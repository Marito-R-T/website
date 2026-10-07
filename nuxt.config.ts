// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Mario Ramírez | Software Engineer & Catedrático',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Portfolio y plataforma académica de Mario Moisés Ramírez Tobar. Ingeniero de Software, Análisis de Datos y Catedrático Universitario.'
        },
        { property: 'og:title', content: 'Mario Ramírez | Software Engineer & Catedrático' },
        {
          property: 'og:description',
          content: 'Ingeniería de software, proyectos interactivos y diapositivas universitarias.'
        },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap'
        }
      ]
    }
  },

  css: [
    '~/assets/css/main.css'
  ],

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n'
  ],

  icon: {
    serverBundle: {
      collections: ['heroicons', 'simple-icons', 'uil']
    }
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },

  content: {
    documentDriven: false,
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-light'
      }
    },
    locales: ['es', 'en'],
    defaultLocale: 'es'
  },

  i18n: {
    locales: [
      { code: 'es', file: 'es.json', name: 'Español' },
      { code: 'en', file: 'en.json', name: 'English' }
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'es',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false
  },

  compatibilityDate: '2024-08-18'
})