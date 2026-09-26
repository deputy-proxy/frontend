import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: './',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        root: resolve(__dirname, 'index.html'),
        'index-1.0.1': resolve(__dirname, 'index-1.0.1.html'),
        'index-2.0.1': resolve(__dirname, 'index-2.0.1.html'),
        'index-2.0.2': resolve(__dirname, 'index-2.0.2.html'),
        'index-3.0.0': resolve(__dirname, 'index-3.0.0.html'),
        'index-4.0.1': resolve(__dirname, 'index-4.0.1.html'),
        avoora: resolve(__dirname, 'avoora.html'),
        'neurex-replication': resolve(__dirname, 'replications/neurex/implementation/index.html'),
        'replications/verdentix/implementation/index': resolve(__dirname, 'replications/verdentix/implementation/index.html'),
        'replications/investflowtemplate-webflow-io-home-pages-home-v3/implementation/index': resolve(__dirname, 'replications/investflowtemplate-webflow-io-home-pages-home-v3/implementation/index.html'),
      },
    },
  },
})