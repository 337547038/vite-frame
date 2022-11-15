export const routeName = () => {
  return {
    name: 'addRouterName',
    enforce: 'pre', //该插件在 plugin-vue 插件之前执行，这样就可以直接解析到原模板文件；
    // apply: 'serve', // 值可以是 build 或 serve 亦可以是一个函数，指明它们仅在 build 或 serve 模式时调用
    transform(code, id) {
      if (
        id.indexOf('.vue') > 0 &&
        id.indexOf('/src/views/') > 0 &&
        id.indexOf('?') === -1
      ) {
        // 从defineRoute里提取
        /*const iReg = new RegExp('defineRoute\\([\\s\\S]*?\\)', 'gi')
        // /src/views 指定文件格式
        const config = code.match(iReg)
        const src = code.replace(iReg, '') // 将defineRoute(***)移除
        let append = ''
        let jsonConfig = ''
        if (config && config[0]) {
          const string = config[0].replace('defineRoute(', '').replace(')', '')
          jsonConfig = new Function('return ' + string)() // 转obj.
        }*/
        // 从script里提取
        let lang = ''
        let name = ''
        let append = ''
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
        if (name) {
          append = `
<script lang="${lang}">
  export default {
    name: "${name}"
  }
</script>`
        }
        // console.log(src + append)
        // console.log(append)
        return {
          code: code + append,
          map: null
        }
      }
    }
  }
}
