<!-- Created by 337547038 on 2022/4/29. -->
<template>
  <div>
    <ak-form :data="data" ref="form" />
    <el-button @click="click">setvalue</el-button>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const data = ref([
    {
      type: 'upload',
      name: 'upload',
      formItem: {
        // formItem参数
        label: '图片上传'
      },
      control: {
        // 当前控件参数
        modelValue: [],
        action: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
        listType: 'picture-card'
      },
      config: {}
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
        modelValue: '12',
        placeholder: '请输入',
        onChange: (val: string) => {
          console.log(val)
        }
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
          defaultValue: '0', // 初始选中值
          style: { width: '78px' }
        }
      }
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
                trigger: 'blur'
              }
            ]
          },
          control: {
            modelValue: ''
          },
          config: {
            append: {
              name: 'inputSelect1', // 必须的，取值赋值使用
              options: {
                // 初始下拉项初始值，同时支持setOptions设置
                '0': '年',
                '1': '月',
                '2': '日',
                '3': '小时'
              },
              placeholder: 'placeholder',
              defaultValue: '0', // 初始选中值
              style: { width: '78px' }
            }
          }
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
    }
  ])
  const form = ref()
  const click = () => {
    form.value.setValue({
      text: 'ab',
      flex: [
        {
          flex1: 'flex1',
          flex2: 'flex2'
        },
        {
          flex1: 'flex11',
          flex2: 'flex22'
        }
      ],
      inputSelect: '2'
    })
    form.value.setOptions({
      inputSelect: {
        '1': '小时',
        '2': '分钟'
      }
    })
  }
</script>
