import path from 'node:path'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    react(),
    UnoCSS(),
  ],
})
