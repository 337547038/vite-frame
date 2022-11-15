import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  createWebHashHistory
} from 'vue-router'
// @ts-ignore
import routesPage from '~pages'

console.log(routesPage)

//import {routesPage} from './routePages'
/*const routesPage = () => {
  const moduleFilesTs = import.meta.glob('../views/!**!/!*.vue')
  const pages: any = []
  Object.keys(moduleFilesTs).forEach((key: string) => {
    const name = key
      .replace('../views/', '')
      .replace('index.vue', '')
      .replace('.vue', '')
    pages.push({
      component: moduleFilesTs[key],
      name: name.replace(/\//g, '-') || 'index',
      path: '/' + name,
      meta: {}
    })
  })
  console.log(pages)
  return pages
}*/
/* 动态路由
import {useRouter} from "vue-router";
let router = useRouter();
router.addRoute(  {
  path: "/vip",
  component: () => import("../views/VipPage.vue")
})*/
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

router.beforeEach((to, from) => {
  /*const { path: toPath } = to
  const { path: fromPath } = from
  if (toPath === fromPath) {
    return false
  }*/
  /*if (to.meta.title) {
    document.title = to.meta.title
  }else {
    document.title = 'to.meta.title'
  }*/
})

export default router
