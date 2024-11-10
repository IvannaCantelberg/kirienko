// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  site: { 
    url: 'https://ukrainianartproject.com', 
    name: 'Ukrainian art projects' 
  }, 
  
  app: {    
    head: {
      noscript: [
        {
          children: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe>`, 
          type: 'text/html',
          body: true
        }
      ], 
      script: [
        {

          hid: 'gtm',
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${process.env.GTM_ID}');`,
          type: 'text/javascript'
        },
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG_ID}`, 
          async: true
        }, 
        {
          hid: 'gtag',
          children: `window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${process.env.GTAG_ID}');`, 
          type: 'text/javascript'
        }        
      ]
    }, 
    
  }, 
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxtjs/i18n', '@nuxt/content', '@element-plus/nuxt', 'nuxt-og-image'], 
  css: ['~/assets/css/base.less'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.less',
    
  }, 
  sourcemap: {
    client: true, 
    server: true
  }, 
   i18n: {
     locales: [
      {
        code: 'en',
        alias: 'EN',
        name: 'English', 
        icon: 'en', 
        language: 'en-US', 
        // isCatchallLocale: true,
        file: 'en-US.json'
      },
      {
        code: 'nl',
        alias: 'NL',
        name: 'Netherlands', 
        icon: 'nl', 
        language: 'nl-NL', 
        file: 'nl-NL.json'
      },
      {
        code: 'ua',
        alias: 'UA',
        name: 'Українська', 
        icon: 'ua', 
        language: 'ua-UA', 
        file: 'ua-UA.json'
      }
    ],
    vueI18n: './i18n.config.ts',
    lazy: false,
    langDir: 'lang/',
    compilation: {
      strictMessage: false,      
    },
  }
})