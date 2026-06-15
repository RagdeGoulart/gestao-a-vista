import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/gestao-a-vista/',
  plugins: [react()],
  publicDir: 'public',
})
