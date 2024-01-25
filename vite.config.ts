import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(),VitePWA({ registerType: 'autoUpdate' })],
  resolve: {
    alias: [
      { find: 'src', replacement: path.resolve(__dirname, 'src') },
      { find: 'pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'service', replacement: path.resolve(__dirname, 'src/service') },
    ],
  },
})
