import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routesPage from 'virtual:generated-pages'
/*interface RoutesItem {
  path: string
  component: any
  name?: string
  redirect?: string
}*/
console.log(routesPage)
const routes: Array<RouteRecordRaw> = [
  /*  {
    path: '/',
    name: '/home',
    component: () => import('../views/index.vue')
  },*/
  {
    path: '/layout',
    redirect: '/',
    name: 'layout',
    component: () => import('../components/layout/index.vue'),
    children: routesPage
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
  //console.log(to)
  //console.log(from)
})

export default router
