// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxtjs/i18n'], 
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  }, 
   i18n: {
     locales: [
      {
        code: 'en',
        alias: 'EN',
        name: 'English', 
        icon: 'en'
      },
     
      {
        code: 'nl',
        alias: 'NL',
        name: 'Netherlands', 
        icon: 'nl'
      }, 
      {
        code: 'ua',
        alias: 'UA',
        name: 'Ukrainian', 
        icon: 'ua'
      }
    ],
    defaultLocale: 'en', 
}
})