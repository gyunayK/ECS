import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'



// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://openapi.etsy.com/v3/application/listings/active",
        changeOrigin: true,
        headers: {
          "x-api-key": "qv6502thxa9gvhanb96jsyzm"
        },
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    
  },
  plugins: [react()],
})

