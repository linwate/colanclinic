// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['.trycloudflare.com', 'localhost', '127.0.0.1'],
    },
  },

  integrations: [react()]
});