import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-07-06',
  devtools: { enabled: true },

  modules: ['@nuxt/fonts'],

  components: [
    { path: '~/components/atoms', pathPrefix: false },
    { path: '~/components/molecules', pathPrefix: false },
    { path: '~/components/organisms', pathPrefix: false },
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'sk' },
      title: 'JolandAI — Váš osobný horoskop',
      meta: [
        {
          name: 'description',
          content:
            'JolandAI vám vytvorí horoskop na mieru. Vyberte si svoje znamenie a nechajte karty prehovoriť.',
        },
      ],
    },
  },
})
