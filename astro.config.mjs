import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://villelabs.cl',
  integrations: [
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
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
  build: {
    outDir: "dist"
  }
});