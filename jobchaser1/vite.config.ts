import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    // Other Vite configuration options...
    assetsInclude: ['**/*.svg'], // Include SVG files in asset processing
  plugins: [react()],
})

