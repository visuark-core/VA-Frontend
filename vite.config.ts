import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow access from local network
    hmr: {
      overlay: true
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
