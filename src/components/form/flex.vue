<template>
  <div v-bind="data.control" class="form-flex">
    <template v-for="(flex, listIndex) in flexData" :key="listIndex">
      <div class="form-flex-row">
        <div class="row">
          <template v-for="(list, i) in data.list" :key="i">
            <field
              :type="list.type"
              v-model="flex[list.name]"
              :prop="`${data.name}.${i}.${list.name}`"
              :data="list"
              @change="changeField(list.name, $event)"
            />
          </template>
        </div>
        <el-button
          size="small"
          class="flex-del-btn"
          @click="deleteRow(listIndex)"
          v-if="data.config?.del"
        >
          {{ data.config.del }}
        </el-button>
      </div>
    </template>
    <div class="flex-add-btn" v-if="data.config?.add">
      <el-button size="small" @click="addRow">
        {{ data.config.add }}
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { watch, onMounted, toRef } from 'vue'
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
  const flexData: any = toRef(props.data, 'flexData')
  // 使用setValue时
  watch(
    () => props.model,
    () => {
      flexData.value = props.model[props.data.name]
    }
  )
  const changeField = (name: string, val: any) => {
    emits('change', name, val)
  }
  // 添加一组数据
  const addRow = () => {
    flexData.value.push(getRow())
  }
  const getRow = () => {
    let temp: any = {}
    props.data.list.forEach((item: any) => {
      temp[item.name] = item.control.modelValue
    })
    return temp
  }
  const deleteRow = (index: number) => {
    flexData.value.splice(index, 1)
  }
  const init = () => {
    if (flexData.value.length === 0) {
      addRow() // 初始时添加一组
    }
  }
  onMounted(() => {
    init()
  })
</script>
