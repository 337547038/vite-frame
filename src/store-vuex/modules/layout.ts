interface Breadcrumb {
  label: string
  to?: string
}
interface TabsViews {
  title: string
  path: string
  name: string // 路由名称name
}
const getSession = window.sessionStorage.getItem('tagViews')
let tabs = []
if (getSession) {
  tabs = JSON.parse(getSession)
}
const layout: any = {
  state: {
    breadcrumb: [],
    tabs: tabs
  },
  mutations: {
    // 这里填充数据的操作方法
    //const store = useStore()
    // 提交方法 store.commit('changeBreadcrumb',value)
    changeBreadcrumb(state: any, data: Breadcrumb[]) {
      state.breadcrumb = data
    },
    setTabsViews(state: any, obj: TabsViews[]) {
      state.tabs = obj
      window.sessionStorage.setItem('tagViews', JSON.stringify(obj))
    }
  },
  actions: {
    // store.dispatch('increment')
    /*increment (context) {
      context.commit('increment')
    },
    increment ({ commit }) {
    commit('increment')
  }
    */
  }
}

export default layout
