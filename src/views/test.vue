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
      ]
    })
  }
</script>
