/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'virtual:generated-pages' {
  const routesList: any[]
  export default routesList
}
/*
declare module 'vuex' {
  type StoreStateType = typeof store.state
  type ModulesType = {
    common: typeof common.state
  }
  export function useStore<S = StoreStateType & ModulesType>(): Store<S>
}
*/
