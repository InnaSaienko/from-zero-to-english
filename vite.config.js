import { defineConfig } from 'vite'
import injectHTML from 'vite-plugin-html-inject'

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true
  },
  plugins: [
    injectHTML(),
  ],
})
