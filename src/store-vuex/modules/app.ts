/**
 * 简单演示用例
 */
const app: any = {
  state: {
    hello: 'hello',
    helloWord: ''
  },
  mutations: {
    // 这里填充数据的操作方法
    // 提交方法 $store.commit('changeHello',value)
    changeHello(state: any) {
      state.hello += '欢迎'
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

export default app
