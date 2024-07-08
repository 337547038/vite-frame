// 快速添加 内置校验规则
const validateConfig = {
  required: {
    label: '必填',
    regExp: /^\s*$/,
    message: '必填项'
  },
  mobile: {
    label: '手机号码',
    regExp: /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/,
    message: '请输入手机号码'
  },
  tel: {
    label: '固话',
    regExp: /^0\d{2,3}-\d{7,8}$/,
    message: '请输入固定电话号码'
  },
  phone: {
    label: '固话或手机',
    regExp: /^((0\d{2,3}(-?)\d{7,8})|(1[3456789]\d{9}))$/,
    message: '请输入固定电话号码或手机号'
  },
  email: {
    label: '邮箱',
    regExp: /^[a-z0-9A-Z._%-]+@([a-z0-9A-Z-]+\.)+[a-zA-Z]{2,4}$/,
    message: '请输入邮箱地址'
  },
  int: {
    label: '正整数',
    regExp: /^[0-9]*[1-9][0-9]*$/,
    message: '请输入正整数'
  },
  number: {
    label: '数字',
    regExp: /^\d+(\.\d+)?$/,
    message: '请输入数字'
  },
  money: {
    label: '金额',
    regExp: /^[0-9]+\.?[0-9]{0,2}$/,
    message: '请输入正确的金额，最多两位小数'
  },
  card: {
    label: '身份证',
    regExp:
      /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
    message: '请输入身份证号'
  },
  cn: {
    label: '中文',
    regExp: /[\u4e00-\u9fa5]+/,
    message: '请输入中文'
  },
  numberLetter: {
    label: '数字字母',
    regExp: /[0-9a-zA-Z]$/,
    message: '请输入数字或字母'
  },
  url: {
    label: '网址',
    regExp: /^https?:\/\/((.)+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?.(\?)?)*)*$/,
    message: '请输入网址'
  },
  longitude: {
    label: '经度',
    regExp: /^[\-+]?(0?\d{1,2}\.\d{1,10}|1[0-7]?\d\.\d{1,10}|180\.0{1,10})$/,
    message: '请输入正确的经度'
  },
  latitude: {
    label: '纬度',
    regExp: /^[\-+]?([0-8]?\d{1}\.\d{1,10}|90\.0{1,10})$/,
    message: '请输入正确的纬度'
  }
}
const validate = (type: string, message?: string, trigger?: string) => {
  switch (type) {
    case 'required':
      return {
        required: true,
        message: message || validateConfig[type].message,
        trigger: trigger || 'blur'
      }
    default:
      return {
        pattern: validateConfig[type].regExp,
        message: message || validateConfig[type].message,
        trigger: trigger || 'blur'
      }
  }
}
export default validate
//export default validateConfig
