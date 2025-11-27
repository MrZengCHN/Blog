import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Blog/',
  build: {
    outDir: '../',
    emptyOutDir: false,
  },
  plugins: [
    {
      name: 'clean-assets',
      buildStart() {
        const assetsDir = path.resolve(__dirname, '../assets')
        if (fs.existsSync(assetsDir)) {
          fs.rmSync(assetsDir, { recursive: true, force: true })
          console.log(`\nDeleted ${assetsDir}`)
        }
      }
    },
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
