import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://Ssadry.github.io/ZeeroReact' // Esto me sirve subirlo en github pages
})
