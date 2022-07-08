import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(store).use(ElementPlus).use(router).mount('#app')
// 全局注册icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
