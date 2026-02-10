import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Performance Optimierungen für Production Build
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Entfernt console.log in Production
      },
    },
    rollupOptions: {
      output: {
        // Code-Splitting für bessere Cache-Nutzung
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['lucide-react'],
        },
      },
    },
    // Chunk-Größe Warnung bei 500kb
    chunkSizeWarningLimit: 500,
  },
})
