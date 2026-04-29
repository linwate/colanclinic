// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://colanclinic.com',
  server: {
    host: true,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['.trycloudflare.com', 'localhost', '127.0.0.1'],
    },
  },

  integrations: [
    react(),
    sitemap({
      // i18n config: emit hreflang alternates so search engines map the
      // three language variants back to one another. zh is the default
      // (root-level redirects to /zh/).
      i18n: {
        defaultLocale: 'zh',
        locales: {
          zh: 'zh-TW',
          en: 'en',
          ja: 'ja',
        },
      },
    }),
  ],
});