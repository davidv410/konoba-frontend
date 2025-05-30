import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "",   // kad pusham ovdje umjesto /konoba-frontend ide samo /
  plugins: [react()]
})
