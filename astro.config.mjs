// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

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
    sitemap({
      // Exclude the 404 page: it is a real route in the build output but must
      // never be submitted for indexing.
      filter: (page) => !page.includes('/404'),
      // Static lastmod for the current content pass. Update when content
      // changes materially; a per-page value needs a content-collection date.
      serialize: (item) => ({ ...item, lastmod: '2026-10-13' }),
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