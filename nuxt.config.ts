// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxtjs/i18n', '@nuxt/content', '@element-plus/nuxt', 'nuxt-og-image',], 
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  }, 
   i18n: {
     locales: [
      {
        code: 'en',
        alias: 'EN',
        name: 'English', 
        icon: 'en', 
        iso: 'en-US', 
        isCatchallLocale: true,
        file: 'en-US.json'
      },
      {
        code: 'nl',
        alias: 'NL',
        name: 'Netherlands', 
        icon: 'nl', 
        iso: 'nl-NL', 
        file: 'nl-NL.json'
      },
      {
        code: 'ua',
        alias: 'UA',
        name: 'Українська', 
        icon: 'ua', 
        iso: 'ua-UA', 
        file: 'ua-UA.json'
      }
    ],
    vueI18n: './i18n.config.ts',
    lazy: false,
    langDir: 'lang/',
    defaultLocale: 'en', 
    compilation: {
      strictMessage: false,
    },
  }, 
  content: {
    // Content module options, if needed
    // For example, you can enable markdown rendering
    markdown: {
      remarkPlugins: [
        // Add any remark plugins here
      ],
      rehypePlugins: [
        // Add any rehype plugins here
      ]
    }
  }
})