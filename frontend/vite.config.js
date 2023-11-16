// vite.config.js
import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [React()],
  server: {
    proxy: {
      '/api': {
        target: 'https://japh-server.onrender.com',
        //http://localhost:5000
        changeOrigin: true,
        //rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});




