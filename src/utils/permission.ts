import { App, nextTick } from 'vue'
export default {
  // @ts-ignore
  install(app: App, options = {}) {
    app.directive('permission', {
      mounted(el: HTMLElement, binding: any) {
        const val = binding.value
        console.log(val)
        el.parentNode.removeChild(el)
      },
      updated(el: HTMLElement, binding: any) {}
      // mounted: lazy.mounted.bind(lazy)
      // updated: lazy.update.bind(lazy),
      // unmounted: lazy.update.bind(lazy)
    })
  }
}
