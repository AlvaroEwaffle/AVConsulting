import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';


export default defineConfig({
  integrations: [react(), sitemap()],
  site: 'https://alvarovillena.cl', // Replace with your actual site URL
  vite: {
    plugins: [tailwindcss()],
  },
});