import tableList from './table/index.vue'
import form from './form/index.vue'

export default (app: any) => {
  app.component('AkForm', form)
  app.component('AkList', tableList)
}
