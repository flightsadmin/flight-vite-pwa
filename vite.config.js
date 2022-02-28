import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default ({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: 'Flight Admin',
        short_name: 'Flight Admin',
        theme_color: '#3880FF',
        display: "standalone",
        background_color: "#FFF",
        icons: [
          {
            src: './img/icons/android-chrome-192x192.png', // <== don't add slash, for testing
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './img/icons/android-chrome-512x512.png', // <== don't remove slash, for testing
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
