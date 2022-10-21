import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import AKFormList from './components/index'
//import AKFormList from '../dist/ak-form-list.es.js'
// 实例化 Pinia
const pinia = createPinia()
const app = createApp(App)
app.use(pinia).use(ElementPlus).use(router).use(AKFormList).mount('#app')

/*app.config.errorHandler = (err, instance, info) => {
  // 向追踪服务报告错误
  console.log('errorHandler')
  console.log(err)
  console.log(instance)
  console.log(info)
}*/
// 全局注册icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
