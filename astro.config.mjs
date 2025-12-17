import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://villelabs.cl',
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