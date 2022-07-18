<!-- Created by 337547038 on 2022/4/29. -->
<template>
  <el-form v-bind="formProps" ref="formEl" :model="model">
    <template v-for="(item, index) in data" :key="index">
      <component
        :is="item.component"
        v-if="item.type === 'component'"
        v-bind="item.control"
        v-model="item.control.modelValue"
      />
      <field
        v-else
        v-show="!item.isHide"
        :type="item.type"
        :formItem="item.formItem"
        :control="item.control"
        v-model="item.control.modelValue"
        :setValue="setValueData[item.formItem?.prop]"
      />
    </template>
    <el-form-item v-if="showBtn">
      <el-button type="primary" @click="onSubmit" v-if="btnText[0]"
        >{{ btnText[0] }}
      </el-button>
      <el-button v-if="btnText[1]" @click="onReset">{{ btnText[1] }}</el-button>
    </el-form-item>
    <slot></slot>
  </el-form>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import Field from './field.vue'
  import { getRequest } from '@/api'

  interface formData {
    type: string
    formItem: any
    control: any
    isHide?: boolean
  }
  const props = withDefaults(
    defineProps<{
      data?: formData[] // 表单项数据
      formProps?: any // el表单组件props参数
      beforeSubmit?: Function // 表单提交前
      afterSubmit?: Function // 表单提交后
      btnText?: string[] // 按钮文案
      showBtn?: boolean // 是否显示按钮
      submitApi?: string // 表单提交接口api
      getApi?: string // 获取接口数据方法
      beforeRequest?: Function
      afterRequest?: Function
    }>(),
    {
      data: () => {
        return []
      },
      btnText: () => ['确定', '取消'],
      showBtn: true
    }
  )
  const emits = defineEmits<{
    //(e: 'update:modelValue', value: any): void
    (e: 'submit', value: any): void
    (e: 'cancel'): void
  }>()
  const model = computed(() => {
    let temp: any = {}
    props.data.forEach((item: formData) => {
      if (item.formItem?.prop) {
        temp[item.formItem.prop] = item.control?.modelValue
      }
    })
    return temp
  })
  const formEl = ref()
  const onSubmit = async () => {
    if (!formEl.value) return
    await formEl.value.validate((valid: any, fields: any) => {
      if (valid) {
        if (props.submitApi) {
          let beforeSubmitPrams = {}
          if (props.beforeSubmit && typeof props.beforeSubmit === 'function') {
            beforeSubmitPrams = props.beforeSubmit(model.value)
          }
          const prams = Object.assign({}, model.value, beforeSubmitPrams)
          getRequest(props.submitApi, prams)
            .then((res: any) => {
              if (
                props.beforeSubmit &&
                typeof props.afterSubmit === 'function'
              ) {
                props.beforeSubmit(res)
              }
              // 这里作全局提交结果处理
            })
            .catch(() => {
              // 这里作全局异常提示处理
            })
        }
        emits('submit', model.value)
      } else {
        console.log('error submit!', fields)
      }
    })
  }
  const onReset = () => {
    formEl.value.resetFields()
    emits('cancel')
  }
  const setValueData = ref({})
  const setValue = (obj: any) => {
    setValueData.value = obj
  }
  // 修改表单时，加载初始数据
  const getData = () => {
    if (props.getApi) {
      let beforeRequestPrams = {}
      if (props.beforeRequest && typeof props.beforeRequest === 'function') {
        beforeRequestPrams = props.beforeRequest() || {}
      }
      const data = {} // 一些请求的参数
      const prams = Object.assign({}, data, beforeRequestPrams)
      getRequest(props.getApi, prams)
        .then((res: any) => {
          if (props.afterRequest && typeof props.afterRequest === 'function') {
            props.afterRequest(res.data)
          }
          setValueData.value = res.data // 使用setValue方式更新
          // 这里作全局提交结果处理
        })
        .catch(() => {
          // 这里作全局异常提示处理
        })
    }
  }
  onMounted(() => {
    getData()
  })
  defineExpose({ setValue, onSubmit, getData })
</script>
