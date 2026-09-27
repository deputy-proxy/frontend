import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: './',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        'originals/arbor-institute': resolve(__dirname, 'originals/arbor-institute/index.html'),
        'originals/sentinel': resolve(__dirname, 'originals/sentinel/index.html'),
      },
    },
  },
})
