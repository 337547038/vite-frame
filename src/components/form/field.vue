<template>
  <el-form-item v-bind="formItem">
    <el-checkbox-group
      v-bind="control"
      v-model="fieldValue"
      v-if="type === 'checkbox'"
    >
      <el-checkbox
        v-bind="item"
        v-for="(item, index) in control?.options"
        :key="index"
        :label="item.value || item.label"
        >{{ item.label }}</el-checkbox
      >
    </el-checkbox-group>
    <el-radio-group
      v-bind="control"
      v-model="fieldValue"
      v-else-if="type === 'radio'"
    >
      <el-radio
        v-bind="control"
        v-for="(item, index) in control?.options"
        :key="index"
        :label="item.value"
        >{{ item.label }}</el-radio
      >
    </el-radio-group>
    <el-select
      v-bind="control"
      v-model="fieldValue"
      v-else-if="type === 'select'"
    >
      <el-option
        v-for="(item, index) in control?.options"
        :key="index"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <!--    <el-upload v-else-if="type === 'select'">根据具体项目做一个或多个不机样式</el-upload>-->
    <component
      :is="currentComponent"
      v-model="fieldValue"
      v-bind="control"
      v-else
    />
  </el-form-item>
</template>

<script lang="ts" setup>
  import { ref, computed, watch } from 'vue'
  const props = withDefaults(
    defineProps<{
      formItem?: Object // 表格formItem相关参数
      control?: Object // formItem内组件相关参数
      type?:
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
      modelValue?: any
    }>(),
    {
      type: 'input'
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void
  }>()
  const fieldValue = ref(props.modelValue)
  watch(
    () => props.modelValue,
    () => {
      fieldValue.value = props.modelValue
    }
  )
  watch(
    () => fieldValue.value,
    (val: any) => {
      emits('update:modelValue', val)
    }
  )
  const currentComponent = computed(() => {
    return `el-${props.type}`
  })
</script>
