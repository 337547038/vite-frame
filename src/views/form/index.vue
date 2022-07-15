<!-- Created by 337547038 on 2022/4/29. -->
<template>
  <p>通过json生成表单</p>
  <FormAuto
    :data="data"
    :formProps="formProps"
    @submit="submit"
    submitApi="formSubmit"
    :beforeSubmit="beforeSubmit"
    ref="autoFormEl"
  />
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
  import { ref } from 'vue'
  import FormAuto from '@/components/form/index.vue'
  import TestCom from './test.vue'

  const data = ref([
    {
      type: 'input',
      formItem: {
        // formItem参数
        label: 'input'
      },
      control: {
        // 当前控件参数
        modelValue: '12',
        placeholder: '请输入',
        onChange: (val: string) => {
          console.log(val)
        }
      },
      isHide: false // 是否隐藏该项
    },
    {
      type: 'input',
      formItem: {
        prop: 'name',
        label: 'input2'
      },
      control: {
        placeholder: '请输入'
      }
    },
    {
      type: 'select',
      formItem: {
        prop: 'select',
        label: 'select',
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
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          }
        ]
      }
    },
    {
      type: 'datePicker',
      formItem: {
        label: 'datePicker'
      },
      control: {
        placeholder: '请选择日期'
      }
    },
    {
      type: 'component',
      component: TestCom,
      control: {
        placeholder: '自定义组件'
      }
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
  // 模拟加载数据后对表单赋值
  setTimeout(() => {
    console.log('setTimeout')
    autoFormEl.value.setValue({
      name: 'abc',
      select: '选项2'
    })
  }, 3000)
</script>
