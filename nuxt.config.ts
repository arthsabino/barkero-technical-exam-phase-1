// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  devtools: { enabled: true },
  alias: {
    '@' : resolve(__dirname, '/')
  },
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  router: {
    options: {
      linkActiveClass: 'active',
    }
  }
})
