<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item
      :name="index + 1"
      :title="item.title"
      v-for="(item, index) in data.list"
      :key="index"
    >
      <template v-for="(list, i) in item.list" :key="i">
        <field
          v-model="model[list.name]"
          :data="list"
          :model="model"
          :prop="list.name"
          :type="list.type"
          @change="changeField(list.name, $event)"
          @slot-change="slotChange($event, i)"
        />
      </template>
    </el-collapse-item>
  </el-collapse>
</template>
<script lang="ts" setup>
  import { computed } from 'vue'
  import Field from './field.vue'

  const props = withDefaults(
    defineProps<{
      data: any
      model?: any // 表单所有的值
    }>(),
    {
      data: () => {
        return {}
      },
      model: () => {
        return {}
      }
    }
  )
  const emits = defineEmits<{
    (e: 'change', name: string, value: any): void
  }>()
  const activeNames = computed(() => {
    return props.data.value
  })
  const changeField = (name: string, val: any) => {
    emits('change', name, val)
  }
  const slotChange = (obj: any, index: number) => {
    // flexData.value[index][obj.name] = obj.value
  }
</script>
