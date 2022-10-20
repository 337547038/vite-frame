// https://vitejs.cn/guide/build.html#library-mode
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  publicDir: false,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    // 使用路径别名时想要省略的后缀名，官方不建议将.vue文件省略后缀
    extensions: ['.js', '.ts']
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/components'),
      name: 'ak-form-list',
      fileName: (format) => `ak-form-list.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'axios', 'vueRouter'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
