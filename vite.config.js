import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: true,         // Permite acceso desde la IP de Windows (localhost)
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true, // Necesario en WSL para detectar cambios en disco de Windows
    },
  },
});
