<!-- Created by 337547038 on 2022/4/29. -->
<template>
  <div>
    <form-field type="datePicker" :data="data1" />
<!--    <form-field type="cascader" :data="data2" />
    <form-field type="checkbox" :data="data3" />-->
    <el-form-item label="Activity name">
      <el-input v-model="name" />
    </el-form-item>
    <el-checkbox v-model="name" label="Option1" border>000</el-checkbox>
  </div>
</template>
<route>
{
name:'Form2'
}
</route>
<script lang="ts">
  export default {
    name: 'Form2'
  }
</script>
<script lang="ts" setup>
  import { ref } from 'vue'
  import FormField from '@/components/form/field.vue'
  const name = ref('')
  const data1 = ref({
    formItem: { label: 'test' },
    control: {
      placeholder: 'Please input'
    }
  })
  const data2 = ref({
    formItem: { label: 'test' },
    control: {
      options: [
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines'
            }
          ]
        }
      ]
    }
  })
  const data3 = ref({
    formItem: { label: 'test' },
    control: {
      options: [
        {
          label: 'Guidelabel'
        },
        {
          label: 'Disciplineslabel'
        }
      ]
    }
  })
</script>
