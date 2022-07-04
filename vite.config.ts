import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from 'path'
import Pages from 'vite-plugin-pages'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    Pages({
      pagesDir: 'src/views',
      extensions: ['vue'],
      exclude: ['**/components/*.vue']
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
