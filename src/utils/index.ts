export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay = 500,
  immediate?: boolean
): T {
  let timerId: any

  return function (this: any, ...args: any[]) {
    if (timerId) {
      clearTimeout(timerId)
    }
    if (immediate) {
      const callNow = !timerId
      timerId = setTimeout(() => {
        timerId = null
      }, delay)
      if (callNow) {
        func.apply(this, args)
      }
    } else {
      timerId = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  } as T
}

export const dateFormatting = (time: any, cFormat?: string) => {
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  // 字符串数字形式的时间戳要转换下
  let newTime = time
  if (/^\d+?$/.test(time)) {
    newTime = parseInt(time)
  }
  const date = typeof time === 'object' ? time : new Date(newTime)
  const formatObj: any = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  return format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a')
      return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
}

// 动态远程加载script脚本
export function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.onload = resolve
    script.onerror = reject
    script.src = src
    document.head.appendChild(script)
  })
}

/**
 * 将数字转千分位表示
 * */
export function parseToThousandth(number: number) {
  return (number + '').replace(/(\d)(?=(\d{3})+(\.|$))/g, '$1,')
}

// 过滤前后空格
export function replaceSpace(text: string) {
  return text.replace(/(^\s*)|(\s*$)/g, '') // 过滤掉前后空格
}

/**
 * 保存localStorage
 */
export const setStorage = (key: string, content: any) => {
  let stringContent = content
  if (typeof content === 'object') {
    stringContent = JSON.stringify(content)
  }
  window.localStorage.setItem(key, stringContent)
}
export const getStorage = (key: string, parse?: boolean) => {
  const val: string = window.localStorage.getItem(key) || ''
  if (parse) {
    return JSON.parse(val)
  }
  return val
}
export const removeStorage = (key: string) => {
  window.localStorage.removeItem(key)
}
