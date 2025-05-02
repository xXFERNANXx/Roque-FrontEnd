import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/MundoAnime',
  plugins: [tailwindcss(), react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Puerto de NestJS
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Elimina /api al redirigir
      },
    },
  },
});