import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    "@styles": path.resolve(__dirname, "./src/styles"),
    "@components": path.resolve(__dirname, "./src/components"),
  },
  plugins: [react()]
})
