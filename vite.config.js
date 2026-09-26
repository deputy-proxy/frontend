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
        'replications/stripe/implementation/index': resolve(__dirname, 'replications/stripe/implementation/index.html'),
      },
    },
  },
})