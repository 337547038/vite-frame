import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  createWebHashHistory
} from 'vue-router'
// @ts-ignore
import routesPage from '~pages'

console.log(routesPage)
const routes: Array<RouteRecordRaw> = [
  {
    path: '/test2',
    name: '/test2',
    component: () => import('../views/test2.vue')
  },
  {
    path: '/test',
    name: '/test',
    component: () => import('../views/test.vue')
  },
  {
    path: '/layout',
    redirect: '/',
    name: 'layout',
    component: () => import('../components/layout/index.vue'),
    children: routesPage
  }
]
// console.log(routes)
// 配置路由
const router = createRouter({
  //history: createWebHistory(),
  history: createWebHashHistory(),
  routes: routes
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
