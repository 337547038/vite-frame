interface Breadcrumb {
  label: string
  to?: string
}
const layout: any = {
  state: {
    breadcrumb: []
  },
  mutations: {
    // 这里填充数据的操作方法
    //const store = useStore()
    // 提交方法 store.commit('changeBreadcrumb',value)
    changeBreadcrumb(state: any, data: Breadcrumb[]) {
      state.breadcrumb = data
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
