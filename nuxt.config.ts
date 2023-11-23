import tailwindTypography from "@tailwindcss/typography";
const SITE_URL = "/microcms-nuxt-tailwindcss/";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-microcms-module", "@nuxtjs/tailwindcss"],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
  app: {
    baseURL: SITE_URL,
    cdnURL: `https://isystk.github.io${SITE_URL}`,
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
        },
      },
    },
  },
  tailwindcss: {
    config: {
      content: [],
      plugins: [tailwindTypography],
    },
  },
});
