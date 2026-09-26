import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

export default defineConfig({
  root: resolve(process.cwd(), 'replications/altrum-template'),
  plugins: [tailwindcss()],
  build: {
    emptyOutDir: true,
    outDir: resolve(process.cwd(), 'replications/altrum-template/.tailwind-build'),
    rollupOptions: {
      input: resolve(process.cwd(), 'replications/altrum-template/tailwind-entry.js'),
      output: { assetFileNames: 'tailwind.compiled.css', entryFileNames: 'unused.js' }
    }
  }
});
