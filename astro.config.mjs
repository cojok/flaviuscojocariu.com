import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://flaviuscojocariu.com',
  outDir: 'public',
  publicDir: 'static',
  integrations: [sitemap({
    changefreq: 'weekly',
    priority: 1,
    lastmod: new Date(),
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en',
        de: 'de',
      },
    }
  })]
});