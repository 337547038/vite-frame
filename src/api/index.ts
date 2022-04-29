import request from '../utils/request'

//const isDev = import.meta.env.DEV

const api: any = {
  tableList: '/get/table/list'
}
export const getRequest = (apiKey: string, data?: any, options = {}) => {
  const obj: any = Object.assign(
    {
      url: api[apiKey],
      method: 'POST',
      data
    },
    options
  )
  return request(obj)
}
