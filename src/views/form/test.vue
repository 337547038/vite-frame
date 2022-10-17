<!-- Created by 337547038 on 2022/7/14. -->
<template>
  <div>
    <el-input :placeholder="placeholder" v-model="value" />
    <el-button>选择</el-button>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  const props = withDefaults(
    defineProps<{
      placeholder?: string
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', obj: any): void
  }>()
  const value = ref('')
  watch(
    () => value.value,
    () => {
      emits('update:modelValue', value.value)
    }
  )
</script>
<style scoped lang="scss">
  div {
    display: flex;
  }
</style>
