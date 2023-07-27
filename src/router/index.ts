import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
// @ts-ignore
import routesPage from '~pages'

console.log(routesPage)
const routes: Array<RouteRecordRaw> = [
  /*{
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
  /*{
    path: '/404',
    component: () => import('../views/ErrorPage.vue')
  },
  {
    path: '/:catchAll(.*)', // 不识别的path自动匹配404
    redirect: '/404'
  }*/
]
// console.log(routes)
// 配置路由
const router = createRouter({
  //history: createWebHistory(),
  history: createWebHashHistory(),
  routes: routes
})

router.afterEach((to: any) => {
  /*  const { path: toPath } = to
  const { path: fromPath } = from
  if (toPath === fromPath) {
    return false
  }*/
  if (to.meta.title) {
    // @ts-ignore
    document.title = to.meta.title
  } else {
    document.title = 'to.meta.title'
  }
})

export default router
