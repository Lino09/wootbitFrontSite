export default {
  mode: 'spa',
  env:{
    apiTokenWootbit: process.env.API_WTBT_TOKEN || ''
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Wootbit - Software Development',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios','~/plugins/vuelidate.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    jit: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [['vue-scrollto/nuxt', { duration: 300 }],'@nuxtjs/axios','@nuxtjs/auth-next'],

  axios: {
    baseURL: process.env.API_WTBT_BASE_URL, // Used as fallback if no runtime config is provided,
    credentials: true
  },
  publicRuntimeConfig: {
    baseURL: process.env.API_WTBT_BASE_URL
  },
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
   
  },
  router: {
    middleware: ['auth']
  },
  auth:{
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    strategies:{
      'laravelSanctum':{
        provider: 'laravel/sanctum',
        url: process.env.API_WTBT_BASE_URL,
        endpoints:{
          login:{
            url:'/api/login',
            propertyName: false,
          },
          user: false
        }
      }
    }
  }

}
