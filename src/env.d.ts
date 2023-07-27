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
declare module 'vue'
declare module 'vue-router'
/*declare module 'vue' {
  export function withDefaults<T>(component: T): T

  export function defineProps<T extends Record<string, unknown>>(props: T): T

  export function defineEmits<
    T extends Record<string, (...args: any[]) => any>
  >(emits: T): T
}*/
