import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alvarovillena.cl',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => {
        // Exclude admin or private pages
        return !page.includes('/admin/') && !page.includes('/private/');
      }
    })
  ],
  output: "static",
  build: {
    outDir: "dist"
  }
});