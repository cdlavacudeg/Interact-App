import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
 resolve:{
    alias: {
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@components": path.resolve(__dirname, "./src/components"),
    }},
    plugins: [react()]
})


