<template>
  <el-form ref="formEl" :model="model" class="comm-form" v-bind="formProps">
    <template v-for="(item, index) in data" :key="index">
      <template v-if="getShow(item)">
        <div v-if="item.type === 'div'" class="div-row" v-bind="item.control">
          <template v-for="(list, listIndex) in item.list" :key="listIndex">
            <field
              v-model="model[list.name]"
              :data="list"
              :model="model"
              :type="list.type"
              @change="changeField(list.name, $event)"
              @slot-change="slotChange"
            />
          </template>
        </div>
        <flex
          v-else-if="item.type === 'flex'"
          :data="item"
          :model="model"
          @change="changeField"
        />
        <div
          v-else-if="item.type === 'title'"
          class="form-title"
          v-bind="item.control"
          v-html="item.title"
        ></div>
        <field
          v-else
          v-model="model[item.name]"
          :data="item"
          :model="model"
          :type="item.type"
          @change="changeField(item.name, $event)"
          @slot-change="slotChange"
        />
      </template>
    </template>
    <slot></slot>
    <el-form-item v-if="btnText">
      <el-button v-if="btnText[0]" type="primary" @click="onSubmit"
        >{{ btnText[0] }}
      </el-button>
      <el-button v-if="btnText[1]" @click="onReset">{{ btnText[1] }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
  import { ref, onMounted, provide } from 'vue'
  import Field from './field.vue'
  import Flex from './flex.vue'
  import { getRequest } from '@/api'

  interface formData {
    name: string
    type:
      | 'input'
      | 'cascader'
      | 'checkbox'
      | 'datePicker'
      | 'inputNumber'
      | 'select'
      | 'switch'
      | 'timePicker'
      | 'timeSelect'
      | 'upload'
      | 'slider'
      | 'component'
    formItem: any
    control: any
    config?: any
    list?: any
    component?: any
    flexData?: any
    title?: any
  }

  const props = withDefaults(
    defineProps<{
      data?: formData[] // 表单项数据
      formProps?: any // el表单组件props参数
      beforeSubmit?: Function // 表单提交前
      afterSubmit?: Function // 表单提交后
      btnText?: string[] | boolean // 按钮文案
      submitApi?: string // 表单提交接口api
      getApi?: string // 获取接口数据方法
      beforeRequest?: Function
      afterResponse?: Function
      hideField?: string[]
    }>(),
    {
      data: () => {
        return []
      },
      btnText: () => ['确定', '取消'],
      hideField: () => {
        return []
      }
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void
    (e: 'change', name: string, value: any): void
    (e: 'submit', value: any): void
    (e: 'cancel'): void
  }>()
  const model = ref<any>({})
  const getModelValue = (data: formData[]) => {
    data.forEach((item: formData) => {
      if (item.name) {
        model.value[item.name] = item.control?.modelValue
      }
      if (item.config && item.type === 'input') {
        // input select插槽
        if (typeof item.config.append === 'object') {
          model.value[item.config.append.name] = item.config.append.defaultValue
        }
        if (typeof item.config.prepend === 'object') {
          model.value[item.config.prepend.name] =
            item.config.prepend.defaultValue
        }
      }
      if (item.type === 'div') {
        getModelValue(item.list)
      }
      if (item.type === 'flex') {
        model.value[item.name] = item.flexData
      }
    })
  }
  getModelValue(props.data)
  const formEl = ref()
  const getShow = (data: formData) => {
    if (props.hideField.includes(data.name)) {
      return false // 不显示
    }
    const linkValue = data.config?.linkValue
    const linkResult = data.config?.linkResult
    if (linkValue) {
      const Fn = new Function('$', `return (${linkValue})`)
      const pass = Fn(model.value)
      if (linkResult === 'disabled') {
        // 设置为disabled后返回显示状态
        data.control.disabled = pass
        return true
      } else {
        return pass
      }
    }
    return true
  }
  const onSubmit = async () => {
    if (!formEl.value) return
    formEl.value
      .validate()
      .then(() => {
        if (props.submitApi) {
          let beforeSubmitPrams = {}
          if (props.beforeSubmit && typeof props.beforeSubmit === 'function') {
            beforeSubmitPrams = props.beforeSubmit(model.value)
          }
          if (beforeSubmitPrams === false) {
            return
          }
          const prams = Object.assign({}, model.value, beforeSubmitPrams || {})
          getRequest(props.submitApi, prams)
            .then((res: any) => {
              if (typeof props.afterSubmit === 'function') {
                props.afterSubmit(res)
              }
              // 这里作全局提交结果处理
            })
            .catch((res: any) => {
              if (typeof props.afterSubmit === 'function') {
                props.afterSubmit(res, 'catch')
              }
              // 这里作全局异常提示处理
            })
        }
        emits('submit', model.value)
      })
      .catch(res => {
        console.log('error submit!', res)
      })
  }
  const onReset = () => {
    formEl.value.resetFields()
    emits('cancel')
  }
  // 设置初始值
  const setValue = (obj: any) => {
    model.value = { ...model.value, ...obj }
  }
  const getValue = () => {
    return model.value
  }
  provide('setValue', model)
  const optValue = ref()
  provide('setOptions', optValue)
  const setOptions = (obj: any) => {
    optValue.value = obj
  }
  const changeField = (name: string, val: any) => {
    emits('change', name, val)
  }
  // 修改表单时，加载初始数据
  const getData = () => {
    if (props.getApi) {
      let beforeRequestPrams = {}
      if (props.beforeRequest && typeof props.beforeRequest === 'function') {
        beforeRequestPrams = props.beforeRequest()
      }
      if (beforeRequestPrams === false) {
        return
      }
      const data = {} // 一些请求的参数
      const prams = Object.assign({}, data, beforeRequestPrams || {})
      getRequest(props.getApi, prams)
        .then((res: any) => {
          let result = res.data
          if (
            props.afterResponse &&
            typeof props.afterResponse === 'function'
          ) {
            result = props.afterResponse(res.data)
          }
          if (result.dict) {
            optValue.value = result.dict
          }
          model.value = { ...model.value, ...result.data }
          // 这里作全局提交结果处理
        })
        .catch((res: any) => {
          // 这里作全局异常提示处理
          if (typeof props.afterResponse === 'function') {
            props.afterResponse(res, 'catch')
          }
        })
    }
  }
  const slotChange = (obj: any) => {
    emits('change', obj.name, obj.value)
    // 更新model
    model.value[obj.name] = obj.value
  }
  onMounted(() => {
    getData()
  })
  defineExpose({ onReset, setValue, getValue, setOptions })
</script>
<style lang="scss">
  .comm-form {
    .form-flex-row {
      display: flex;
      justify-content: space-between;
      .row {
        flex: 2;
        margin-right: 5px;
      }
    }
    .flex-add-btn {
      margin-bottom: 18px;
    }
  }
</style>
