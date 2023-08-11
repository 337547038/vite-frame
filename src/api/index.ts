import request from '../utils/request'

//const isDev = import.meta.env.DEV

const api: any = {
  // tableList: '/get/table/list',
  formSubmit: './formSubmit',
  tableList: './mock/list.json',
  getFormContent: './mock/form.json'
}
export const getRequest = (apiKey: string, data?: any, options = {}) => {
  // @ts-ignore
  const optApiKey = options.apiKey || {}
  let url = api[apiKey] || apiKey
  // 解决动态url 如/api/delete/id(id为动态时)
  // 1.url设置为：/api/delete/$id
  // 2.options参数设置：options:{apikey:{$id:xx}}
  if (Object.keys(optApiKey).length) {
    for (const key in optApiKey) {
      url = url.replace(key, optApiKey[key])
    }
  }
  const obj: any = Object.assign(
    {
      url: url,
      method: 'GET',
      data
    },
    options
  )
  return request(obj)
}
