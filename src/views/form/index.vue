<template>
  <el-alert type="success">
    实现功能：<br />
    1.实现联动隐藏显示或禁用启用；<br />
    2.实现接口数据初始填充；<br />
    3.实现数据提交；<br />
    4.实现常见类型快速校验；<br />
    5.实现radio等类选项数据动态获取/字典匹配；<br />
    6.实现动态联动请求；<br />
    7.实现div布局；<br />
  </el-alert>
  <p></p>
  <ak-form
    :data="data"
    :formProps="formProps"
    @submit="submit"
    submitApi="formSubmit"
    :beforeSubmit="beforeSubmit"
    @change="change"
    getApi="getFormContent"
    ref="autoFormEl"
  />
  <el-button @click="setValue">setValue</el-button>
  <el-button @click="setOptions">setOptions</el-button>
</template>
<route>
{
name:'Form'
}
</route>
<script lang="ts">
  export default {
    name: 'Form'
  }
</script>
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
    }
  ])
  const formProps = ref({
    rules: {
      name: [
        {
          required: true,
          message: 'Please input Activity name',
          trigger: 'blur'
        },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
      ]
    }
  })
  const submit = (obj: any) => {
    console.log(obj)
  }
  // 表单提交前方法，这里返回的参数将会合并提交
  const beforeSubmit = () => {
    return {
      id: 'id12121'
    }
  }
  const autoFormEl = ref()
  // 设置值
  const setValue = () => {
    autoFormEl.value.setValue({
      text: 'abc',
      password: '123',
      select: '1',
      textC: '自定义校验初始值'
    })
  }
  // 设置options，支持两种格式
  const setOptions = () => {
    autoFormEl.value.setOptions({
      radio: [
        {
          value: '0',
          label: '男'
        }
      ],
      radio2: { 0: 'setOption' }
    })
  }
  // 组件值改变事件
  const change = (name: string, value: any) => {
    // console.log(name, value)
  }
</script>
<style lang="scss">
  .div-row {
    display: flex;
  }
</style>
