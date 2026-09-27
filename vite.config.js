import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: './',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        'replications/kora/implementation/index': resolve(__dirname, 'replications/kora/implementation/index.html'),
        'replications/investflowtemplate-webflow-io-home-pages-home-v3/implementation/index': resolve(__dirname, 'replications/investflowtemplate-webflow-io-home-pages-home-v3/implementation/index.html'),
        'replications/juristiq-wcopilot-webflow-io/implementation/index': resolve(__dirname, 'replications/juristiq-wcopilot-webflow-io/implementation/index.html'),
      },
    },
  },
})
