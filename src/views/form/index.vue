<!-- Created by 337547038 on 2022/4/29. -->
<template>
  <p>通过json生成表单</p>
  <FormAuto :data="data" :formData="formData" />
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
  const data = ref([
    {
      type: 'input',
      formItem: {
        label: 'input'
      },
      control: {
        placeholder: '请输入'
      }
    },
    {
      type: 'select',
      formItem: {
        label: 'select'
      },
      control: {}
    },
    {
      type: 'datePicker',
      formItem: {
        label: 'datePicker'
      },
      control: {
        placeholder: '请选择日期'
      }
    }
  ])
  const formData = ref({})
</script>
