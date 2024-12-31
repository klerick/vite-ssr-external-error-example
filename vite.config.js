import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  ssr: {
    external: ['some-external-lib-name']
  },
  build: {
    rollupOptions: {
      external: ['some-external-lib-name']
    }
  },
  plugins: [vue()],
})
