import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { VitePWA } from "vite-plugin-pwa";
import vitePluginSingleSpa from 'vite-plugin-single-spa';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    vitePluginSingleSpa({
      serverPort: 80,
      spaEntryPoints:'src/spa.tsx'
      }),
    VitePWA({ registerType: 'autoUpdate' }),
  ],
  resolve: {
    alias: [
      { find: 'src', replacement: path.resolve(__dirname, 'src') },
      { find: 'pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'service', replacement: path.resolve(__dirname, 'src/service') },
    ],
  },
  server: {
    host: true,
    fs: {
      strict: false
    },
    port: 80
  },
  preview:{
    host: true,
    port:80
  }
})
