<!-- Created by 337547038 on 2022/4/29. -->
<template>
  <el-form v-bind="formData" ref="formEl">
    <field
      v-for="(item, index) in data"
      :key="index"
      :type="item.type"
      :formItem="item.formItem"
      :control="item.control"
    />
    <el-form-item v-if="showBtn">
      <el-button type="primary" @click="onSubmit" v-if="btnText[0]"
        >{{ btnText[0] }}
      </el-button>
      <el-button v-if="btnText[1]" @click="onReset">{{ btnText[1] }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Field from './field.vue'

  interface formData {
    type: string
    formItem: any
    control: any
  }

  const props = withDefaults(
    defineProps<{
      data?: formData
      formData?: any
      beforeSubmit?: Function // 表单提交前
      afterSubmit?: Function // 表单提交后
      btnText?: string[]
      showBtn?: boolean
    }>(),
    {
      btnText: () => ['确定', '取消'],
      showBtn: true
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void
  }>()
  const formEl = ref()
  const onSubmit = async () => {
    if (!formEl.value) return
    await formEl.value.validate((valid: any, fields: any) => {
      if (valid) {
        console.log('submit!')
      } else {
        console.log('error submit!', fields)
      }
    })
  }
  const onReset = () => {}
  defineExpose({ formEl })
</script>
