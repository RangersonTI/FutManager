import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Rota } from "./src/app/shared/config/routes"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: Rota.URL_BASE,
  server:{
    host: "0.0.0.0",
    port: 8000
  }
})
