# Form

## Props

| 参数            | 说明                                  |
|---------------|-------------------------------------|
| data          | 表单项数据集合                             |
| submitApi     | 表单提交接口api，不传api时可通过submit事件提交表单     |
| formProps     | el表单组件props参数                       |
| beforeSubmit  | 表单提交前方法，仅在submitApi为真时，返回false时取消请求 |
| afterSubmit   | 表单提交后方法，仅在submitApi为真时              |
| getApi        | 表单获取数据接口api，当表单存在修改时，可使用此参数请求接口     |
| beforeRequest | 获取数据提交前方法，仅在getApi为真时，返回false时取消请求  |
| afterResponse | 获取数据提交后方法，仅在getApi为真时               |
| hideField     | 需要隐藏的表单项集合                          |

## Form Event

| 事件名    | 说明                            |
|--------|-------------------------------|
| change | 表单组件改变事件,function(name,value) |

## Form Method

| 事件名        | 说明                                |
|------------|-----------------------------------|
| setValue   | 用于设置初始值                           |
| getValue   | 用于获取表单当前值                         |
| setOptions | 用于设置下拉项                           |
| getData    | 用于获取初始数据,function(data) data请求的参数 |
| onSubmit   | 用于提交表单                            |
| onReset    | 用于重置表单                            |

## Form data

| 参数         | 说明                                                                                                                                  |
|------------|-------------------------------------------------------------------------------------------------------------------------------------|
| type       | 组件类型，支持`input、cascader、checkbox、datePicker、inputNumber、select、switch、timePicker、timeSelect、upload、slider、component、div、flex、button` |
| formItem   | 表单formItem组件相关参数                                                                                                                    |
| control    | 对应type类型的组件所有参数                                                                                                                     |
| modelValue | 当前表单值                                                                                                                               |
| component  | import的组件，仅在`type=component`时                                                                                                       |
| config     | 其他一些配置信息                                                                                                                            |

## data.customRules校验
| 类型      | 说明                                                                                          |
|---------|---------------------------------------------------------------------------------------------|
| type    | 自定义的校验类型，支持`required,mobile,tel,phone,email,int,number,money,card,cn,url`。详情`./validate.ts` |
| message | 错误提示语，可为空                                                                                   |
| trigger | 触发类型，默认blur                                                                                 |

## data.config
| 类型            | 类型             | 说明                                                              |
|---------------|----------------|-----------------------------------------------------------------|
| linkValue     | string         | 联动条件设置,`$`表示当前表单的值                                              |
| linkResult    | string         | 联动显示结果，可选`disabled`，默认隐藏                                        |
| optionsKey    | string/boolean | 当前项options数据关联字典数据的标识，为false时表示不关联，即选项数据不会匹配setOptions和接口dict数据 |
| url           | string         | 通过url获取数据，可使用`${text}`带一个动态参数                                   |
| method        | string         | 可选get或post                                                      |
| params        | object         | 通过url获取数据请求参数，绝对false时不请求                                       |
| afterResponse | function       | 请求结果方法                                                          |


## 示例
```vue
<template>
  <ak-form :data="data" />
</template>
<script lang="ts" setup>
  import { ref, markRaw } from 'vue'
  import TestCom from './test.vue'
  const data = ref([
    {
      type: 'input',
      name: 'text',
      formItem: {
        // formItem参数
        label: '用户名'
      },
      control: {
        // 当前控件参数
        modelValue: '12',
        placeholder: '请输入',
        onChange: (val: string) => {
          console.log(val)
        }
      },
      config: {
        linkValue: '$.select==="2"', // 联动事件选择的值为2时，禁用当前组件，多条件可用||或&&拼接
        linkResult: 'disabled' // disabled禁用,否则隐藏（默认）
      }
    },
    {
      type: 'input',
      name: 'password',
      formItem: {
        label: '密码',
        rules: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'change'
          }
        ]
      },
      control: {
        type: 'password',
        placeholder: '请输入密码'
      }
    },
    {
      type: 'input',
      name: 'password2',
      formItem: {
        label: '确认密码',
        rules: [
          {
            message: '两次密码不一致',
            trigger: 'change',
            validator: (rule: any, value: any, callback: any) => {
              const formValue = autoFormEl.value.getValue()
              if (value !== formValue.password) {
                callback(new Error("Two inputs don't match!"))
              } else {
                callback()
              }
            }
          }
        ]
      },
      control: {
        type: 'password',
        placeholder: '请输入确认密码'
      }
    },
    {
      type: 'input',
      name: 'textC',
      formItem: {
        label: '自定义校验',
        customRules: [
          {
            type: 'required',
            message: '必填项',
            trigger: 'blur'
          },
          {
            type: 'phone'
          }
        ]
      },
      control: {
        modelValue: '',
        placeholder: '请输入'
      },
      config: {
        linkValue: '$.select!=="1"' // 联动事件选择的值为1时，当前组件不显示
      }
    },
    {
      type: 'select',
      name: 'select',
      formItem: {
        label: '联动事件',
        rules: [
          {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change'
          }
        ]
      },
      control: {
        options: [
          {
            value: '0',
            label: '不设置'
          },
          {
            value: '1',
            label: '隐藏自定义校验组件'
          },
          {
            value: '2',
            label: '禁用用户名输入'
          }
        ]
      }
    },
    {
      type: 'radio',
      name: 'radio',
      formItem: {
        label: '单选组固定值'
      },
      control: {
        options: [
          {
            value: '0',
            label: '男'
          },
          {
            value: '1',
            label: '女'
          }
        ]
      },
      config: {
        optionsKey: false // 不使用setOptions和dict的数据
      }
    },
    {
      type: 'radio',
      name: 'radio2',
      formItem: {
        label: 'URL获取Options'
      },
      control: {
        options: []
      },
      config: {
        url: './mock/options.json', // 请求的url
        method: 'get', // 请求方法默认post
        params: {}, // 请求参数
        afterResponse: (res: any) => {
          return res // 请求成功数据处理
        }
      }
    },
    {
      type: 'radio',
      name: 'radio3',
      formItem: {
        label: '关联用户名'
      },
      control: {
        options: []
      },
      config: {
        url: './mock/options.json?name=${text}', // 请求的url
        method: 'get', // 请求方法默认post
        params: {}, // 请求参数
        afterResponse: (res: any) => {
          return res // 请求成功数据处理
        }
      }
    },
    {
      type: 'radio',
      name: 'radio4',
      formItem: {
        label: '从接口dict匹配'
      },
      control: {
        options: []
      },
      config: {
        optionsKey: 'checkbox'
      }
    },
    {
      type: 'datePicker',
      name: 'datePicker',
      formItem: {
        label: 'datePicker'
      },
      control: {
        placeholder: '请选择日期'
      }
    },
    {
      type: 'component',
      name: 'component',
      component: markRaw(TestCom),
      control: {
        placeholder: '自定义组件'
      }
    },
    {
      type: 'title',
      title: 'div布局',
      control: {}
    },
    {
      type: 'div',
      control: {},
      list: [
        {
          type: 'input',
          name: 'textDiv',
          formItem: {
            label: 'div1'
          },
          control: {}
        },
        {
          type: 'input',
          name: 'textDiv2',
          formItem: {
            label: 'div2'
          },
          control: {}
        }
      ]
    },
    {
      type: 'flex',
      name: 'flex',
      control: {},
      flexData: [],
      list: [
        {
          type: 'input',
          name: 'flex1',
          formItem: {
            label: 'flex1',
            rules: [
              {
                required: true,
                message: '不能为空',
                trigger: 'change'
              }
            ]
          },
          control: {}
        },
        {
          type: 'input',
          name: 'flex2',
          formItem: {
            label: 'flex2'
          },
          control: {}
        }
      ],
      config: {
        add: '添加',
        del: 'del'
      }
    },
    {
      type: 'input',
      name: 'text',
      formItem: {
        // formItem参数
        label: '用户名'
      },
      control: {
        // 当前控件参数
        modelValue: '',
        placeholder: '请输入'
      },
      config: {
        prepend: 'http', // 字符串时仅支持文字，同时可支持select下拉，见append设置
        append: {
          name: 'inputSelect', // 必须的，取值赋值使用
          options: {
            // 初始下拉项初始值，同时支持setOptions设置
            '0': '年',
            '1': '月',
            '2': '日',
            '3': '小时'
          },
          placeholder: 'placeholder',
          defaultValue: '0' // 初始选中值
        },
        suffix:'suffix', // 输入框头部内容，仅支持字符串文本
        prefix:'prefix' // 输入框尾部内容，仅支持字符串文本
      }
    },
    {
      type: 'button',
      list: [
        {
          type: 'primary',
          label: '提交',
          key: 'submit',
          click: () => {
            console.log('click')
            // return false // 可阻止内部表单提交
          }
        },
        {
          type: '',
          label: '取消',
          key: 'cancel'
        }
      ]
    }
  ])
</script>
```
