<template>
  <el-form
    v-bind="formProps"
    ref="formEl"
    :class="{ ['comm-form']: true, [`form-row-${row}`]: row }"
    :model="model"
  >
    <template v-for="(item, index) in data" :key="index">
      <template v-if="getShow(item)">
        <div
          v-bind="item.control"
          v-if="item.type === 'div'"
          class="div-row"
          :style="getSpanWidth(item)"
        >
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
          :style="getSpanWidth(item)"
          :data="item"
          :model="model"
          @change="changeField"
        />
        <div
          v-bind="item.control"
          :style="getSpanWidth(item)"
          v-else-if="item.type === 'title'"
          class="form-title"
          v-html="item.title"
        ></div>
        <div
          v-else-if="item.type === 'button'"
          class="form-btn"
          v-bind="item.control"
        >
          <el-button
            v-for="(btn, bI) in item.list"
            :key="bI"
            v-bind="btn"
            @click="btnClick(btn)"
            >{{ btn.label }}</el-button
          >
        </div>
        <collapse
          v-else-if="item.type === 'collapse'"
          :data="item"
          :model="model"
          @change="changeField"
        />
        <field
          :style="getSpanWidth(item)"
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
  </el-form>
</template>

<script lang="ts" setup>
  import { ref, onMounted, provide } from 'vue'
  import Field from './field.vue'
  import Collapse from './collapse.vue'
  import Flex from './flex.vue'
  import { getRequest } from '@/api'
  import { ElMessage } from 'element-plus'
  import type { FormData } from '../types'

  const props = withDefaults(
    defineProps<{
      data?: FormData[] // 表单项数据
      formProps?: any // el表单组件props参数
      beforeSubmit?: Function // 表单提交前
      afterSubmit?: Function // 表单提交后
      submitUrl?: string // 表单提交接口api
      requestUrl?: string // 获取接口数据方法
      beforeRequest?: Function
      afterResponse?: Function
      hideField?: string[]
      row?: number // 排列列数
    }>(),
    {
      data: () => {
        return []
      },
      hideField: () => {
        return []
      }
    }
  )
  const emits = defineEmits<{
    //(e: 'update:modelValue', value: any): void
    (e: 'change', name: string, value: any): void
    //(e: 'submit', value: any): void
    //(e: 'cancel'): void
  }>()
  const model = ref<any>({})
  const getModelValue = (data: FormData[]) => {
    data.forEach((item: FormData) => {
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
      if (item.type === 'collapse') {
        item.list.forEach((item: any) => {
          getModelValue(item.list)
        })
      }
    })
  }
  getModelValue(props.data)
  const formEl = ref()
  const getShow = (data: FormData) => {
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
        if (props.submitUrl) {
          let beforeSubmitParams = {}
          if (props.beforeSubmit && typeof props.beforeSubmit === 'function') {
            beforeSubmitParams = props.beforeSubmit(model.value)
          }
          if (beforeSubmitParams === false) {
            return
          }
          const prams = Object.assign({}, model.value, beforeSubmitParams || {})
          let after
          getRequest(props.submitUrl, prams)
            .then((res: any) => {
              if (typeof props.afterSubmit === 'function') {
                after = props.afterSubmit(res)
              }
              if (after === false) {
                return
              }
              // 这里作全局提交结果处理
              ElMessage({
                message: res.message,
                type: 'success'
              })
            })
            .catch((res: any) => {
              if (typeof props.afterSubmit === 'function') {
                props.afterSubmit(res, 'catch')
              }
              if (after === false) {
                return
              }
              ElMessage({
                message: res.data?.message,
                type: 'error'
              })
              // 这里作全局异常提示处理
            })
        }
        //emits('submit', model.value)
      })
      .catch(res => {
        console.log('error submit!', res)
      })
  }
  const onReset = () => {
    formEl.value.resetFields()
    //emits('cancel')
  }
  // 设置初始值
  const setValue = (obj: any, filter = true) => {
    if (filter) {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(model.value, key)) {
          model.value[key] = obj[key]
        }
      }
    } else {
      model.value = Object.assign({}, model.value, obj || {})
    }
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
  const getData = (data = {}) => {
    if (props.requestUrl) {
      let beforeRequestParams = {}
      if (props.beforeRequest && typeof props.beforeRequest === 'function') {
        beforeRequestParams = props.beforeRequest()
      }
      if (beforeRequestParams === false) {
        return
      }
      // const data = {} // 一些请求的参数
      const params = Object.assign({}, data, beforeRequestParams || {})
      getRequest(props.requestUrl, params)
        .then((res: any) => {
          let result = res
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

  // 表单内置按钮事件
  const btnClick = (btn: any) => {
    /*if (btn.click) {
      if (btn.click() === false) {
        return // 阻止提交
      }
    }*/
    if (btn.key === 'submit') {
      // 提交表单
      onSubmit()
    } else if (btn.key === 'cancel') {
      // 重置表单
      onReset()
    }
    btn.click && btn.click(model.value)
  }
  // 设置列宽
  const getSpanWidth = (item: any) => {
    const span = item.config?.span
    if (span) {
      return { width: (span / 24) * 100 + '%' }
    }
    return {}
  }
  onMounted(() => {
    //getData()
  })
  defineExpose({ onSubmit, onReset, setValue, getValue, setOptions, getData })
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

    &.form-row-2 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      > div {
        width: 48%;
      }
    }
    .el-form-item__content {
      align-items: flex-start;
    }
  }
</style>
