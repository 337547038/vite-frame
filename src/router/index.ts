import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
/*interface RoutesItem {
  path: string
  component: any
  name?: string
  redirect?: string
}*/

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/home',
    component: () => import('../views/index.vue')
  }
]

// 配置路由
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  /*const { path: toPath } = to
  const { path: fromPath } = from
  if (toPath === fromPath) {
    return false
  }*/
  console.log(to)
  console.log(from)
})

export default router
