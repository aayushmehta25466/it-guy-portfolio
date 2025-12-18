import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: '.',
  base: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
  plugins: [
    tailwindcss(),
  ],
  server: {
    port: 3000,
    host: '127.0.0.1',
  },
})
