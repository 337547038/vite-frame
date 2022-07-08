<!-- Created by 337547038 on 2022/4/29. -->
<template>
  <div>
    <form-field type="datePicker" :formItem="item" :control="inputData" />
    <form-field type="cascader" :formItem="item" :control="cascader" />
    <form-field type="checkbox" :formItem="item" :control="checkbox" />
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
  const item = ref({ label: 'test' })
  const inputData = ref({
    placeholder: 'Please input'
  })
  const name = ref('')
  const cascader = ref({
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
  })
  const checkbox = ref({
    options: [
      {
        label: 'Guidelabel'
      },
      {
        label: 'Disciplineslabel'
      }
    ]
  })
</script>
