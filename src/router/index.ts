import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
// @ts-ignore
import routesPage from '~pages'
import { getStorage } from '@/utils'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

/**
 * meta:{
 *   layout:'hidden', // 设置hidden时路由不会出现侧边栏，如login,401等不需要主layout框架的页面
 *   title:'', // 需要显示的标题
 *   permissions:'' // 当前页面权限，默认为当前url，类型支持string/string[]，其他类型即为白名单
 * }
 */
console.log(routesPage)
const filterRoutesPage = (hidden?: boolean) => {
  if (routesPage?.length) {
    return routesPage.filter((item: any) => {
      const { layout } = item.meta || {}
      if (hidden) {
        return layout === 'hidden'
      } else {
        return layout !== 'hidden'
      }
    })
  }
}
//console.log('filterRoutesPage', filterRoutesPage(true))
const routes: Array<RouteRecordRaw> = [
  {
    path: '/layout',
    redirect: '/',
    name: 'layout',
    component: () => import('../components/layout/index.vue'),
    children: filterRoutesPage() // 排除设置了hidden的
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
  routes: [...routes, ...filterRoutesPage(true)]
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  const permissions: string | string[] = to.meta?.permissions
  if (permissions) {
    //const token: string = getStorage('token')
    //const menuList: any = getStorage('_menu') || []
    // 判断有没权限 todo
    next()
  } else {
    // 白名单
    next()
  }
})
router.afterEach((to: any) => {
  if (to.meta.title) {
    // @ts-ignore
    document.title = to.meta.title + ''
  } else {
    document.title = '管理系统'
  }
  NProgress.done()
})

export default router
