import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/static/',
  build:{
    outDir: '../law_office_backend_pro/static',
    emptyOutDir: true,
  },
  plugins: [react()]
})
