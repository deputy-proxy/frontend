import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: './',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        'neurex-replication': resolve(__dirname, 'replications/neurex/implementation/index.html'),
        'replications/verdentix/implementation/index': resolve(__dirname, 'replications/verdentix/implementation/index.html'),
        'replications/investflowtemplate-webflow-io-home-pages-home-v3/implementation/index': resolve(__dirname, 'replications/investflowtemplate-webflow-io-home-pages-home-v3/implementation/index.html'),
      },
    },
  },
})
