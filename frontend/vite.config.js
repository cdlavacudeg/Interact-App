import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@img": path.resolve(__dirname, "./src/img"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@services": path.resolve(__dirname, "./src/services"),
    }
  },
  plugins: [react()]
})


