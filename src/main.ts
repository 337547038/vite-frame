import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store'
import router from './router'
/*import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'*/
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import * as Icons from '@ant-design/icons-vue'
const app = createApp(App)
app.use(store, key).use(Antd).use(router).mount('#app')
const icons: any = Icons
for (const i in icons) {
  app.component(i, icons[i])
}
