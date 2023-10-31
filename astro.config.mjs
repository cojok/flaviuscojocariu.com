import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://flaviuscojocariu.com',
  outDir: 'public',
  publicDir: 'static',
  integrations: [sitemap()]
});