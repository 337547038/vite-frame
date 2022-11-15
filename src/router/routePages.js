/*功能描述：
 * 1.添加路由name值，可应用于keepAlive
 * 2.根据目录生成路由文件，无需手动配置
 * 3.生产环境可移除console.log()代码
 * */
/*参数说明：
 * {
 * name:'', // 页面路由名称
 * meta:{}, // 页面路由信息
 * path:'', // 指定当前页面访问路径
 * dirs:'src/views/', // 页面路径，多页面路径可为数组形式
 * extensions:['vue'], // 页面路径下有效的文件扩展名
 * exclude:[] // 排除目录
 * }
 * */
// 移除console.log
/*
export const removeConsoleLog = (path) => {
  return {
    name: 'removeLog',
    enforce: 'pre', //该插件在 plugin-vue 插件之前执行，这样就可以直接解析到原模板文件；
    apply: 'build', // 值可以是 build 或 serve 亦可以是一个函数，指明它们仅在 build 或 serve 模式时调用
    transform(code, id) {
      if (!path || (path && id.indexOf(path) !== -1)) {
        // /src/views 指定目录下
        const iReg = new RegExp('console.log\\((.*?)\\)', 'gi')
        const src = code.replace(iReg, '')
        return {
          code: src,
          map: null
        }
      }
    }
  }
}*/
/*
const getDefineRoute = (code) => {
  // 从defineRoute里提取
  const iReg = new RegExp('defineRoute\\([\\s\\S]*?\\)', 'gi')
  // /src/views 指定文件格式
  const config = code.match(iReg)
  const src = code.replace(iReg, '') // 将defineRoute(***)移除
  let jsonConfig = {}
  if (config && config[0]) {
    const string = config[0].replace('defineRoute(', '').replace(')', '')
    jsonConfig = new Function('return ' + string)() // 转obj.
  }
  return {
    src: src,
    config: jsonConfig || {}
  }
}*/
/*
const getScript = (code) => {
  let lang = ''
  let name = ''
  const iReg2 = new RegExp('<script(.*?)>', 'gi')
  const script = code.match(iReg2)
  if (script && script[0]) {
    const script0 = script[0].replace(/'/g, '"') // 预防单引号，先转双引号
    const _lang = script0.match(/lang="(.*?)"/i)
    if (_lang && _lang.length > 1) {
      lang = _lang[1]
    }
    const _name = script0.match(/name="(.*?)"/i)
    if (_name && _name.length > 1) {
      name = _name[1]
    }
  }
  return {
    lang: lang,
    name: name
  }
}*/
/*
const setRouteName = (lang, name) => {
  if (name) {
    return `<script lang="${lang}">
  export default {
    name: "${name}"
  }
</script>`
  }
  return ''
}
let pages = []
const setRouterPages = (opt, dir, id, name, baseRoute = '') => {
  console.log('setRouterPages')
  /!* const path = id.split(dir)[1]
  // 当没有设置name时，则自动从路径中获取
  const routeName = path.replace('index.vue', '').replace('.vue', '') || '/'
  pages.push({
    component: () => import(`${dir}${path}`),
    name: name || routeName.replace(/\//g, '-'),
    path: baseRoute + (opt.path || routeName),
    meta: opt.meta || {}
  })*!/
}*//*
const getTransform = (code, id, opt, dir, baseRoute) => {
  const extensions = opt.extensions || ['vue']
  const extensionsRE = new RegExp(`\\.(${extensions.join('|')})`) // 指定后缀
  const exclude = opt.exclude || []
  const excludeRE = new RegExp(exclude.join('|')) // 排除的
  if (
    extensionsRE.test(id) &&
    id.includes(dir) &&
    !id.includes('?') &&
    !(exclude.length && excludeRE.test(id))
  ) {
    console.log(id)
    const { src, config } = getDefineRoute(code)
    const { lang, name } = getScript(code)
    const routeNameScript = setRouteName(lang, config.name || name)
    //setRouterPages(opt, dir, id, name, baseRoute)
    console.log(opt, dir, id, name, baseRoute)
    pages.push(id)
    return {
      code: src + routeNameScript,
      map: null
    }
  }
}
export const routeName = (opt = {}) => {
  return {
    name: 'routePages',
    enforce: 'pre', //该插件在 plugin-vue 插件之前执行，这样就可以直接解析到原模板文件；
    // apply: 'serve', // 值可以是 build 或 serve 亦可以是一个函数，指明它们仅在 build 或 serve 模式时调用
    transform(code, id) {
      const dirsPath = opt.dirs || 'src/views/'
      if (typeof dirsPath === 'string') {
        return getTransform(code, id, opt, dirsPath)
      } else if (typeof dirsPath === 'object') {
        dirsPath.forEach((item) => {
          return getTransform(code, id, opt, item.dir, item.baseRoute)
        })
      }
    }
  }
}
export { pages }
*/
