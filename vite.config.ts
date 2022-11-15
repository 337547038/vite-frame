import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import * as path from 'path'
import { routeName } from './src/utils/vitePlugins'
// @ts-ignore
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    routeName(),
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
    },
    // 使用路径别名时想要省略的后缀名，官方不建议将.vue文件省略后缀
    extensions: ['.js', '.ts']
  },
  base: './',
  build: {
    outDir: 'docs'
  }
})
