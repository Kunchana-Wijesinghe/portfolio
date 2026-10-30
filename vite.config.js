import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => ({
  base: command === 'build' || mode === 'production' ? '/portfolio/' : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
}))
