
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Use esbuild for minification (faster & built-in, no need for terser)
    minify: 'esbuild',
    target: 'es2015',
    cssCodeSplit: true,
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion'))   return 'vendor-motion';
            if (id.includes('@iconify'))         return 'vendor-icons';
            if (id.includes('react-router-dom')) return 'vendor-router';
            return 'vendor';
          }
        },
      },
    },
  },
})
