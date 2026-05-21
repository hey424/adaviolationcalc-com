import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://adaviolationcalc.com',
  output: 'static',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
