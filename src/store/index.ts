import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import app from './modules/app'

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules: {
    app
  }
  /*  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }*/
})
