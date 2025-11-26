import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'ESTEC ScanIT',
        short_name: 'EScanIT',
        description: 'This is a scan software is running in Android',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/src/assets/logos/estec-icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/src/assets/logos/estec-icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'Run any device with another screen size',
          }
        ]
      }
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 5175,
    strictPort: true
  },
})
