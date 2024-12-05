import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração simples do Vite
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public',
  }
})
