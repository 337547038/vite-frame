<template>
  <div class="form-flex" v-bind="data.control">
    <div
      v-for="(flex, listIndex) in flexData"
      :key="listIndex"
      class="form-flex-row"
    >
      <div class="row">
        <template v-for="(list, i) in data.list" :key="i">
          <field
            v-model="flex[list.name]"
            :data="list"
            :model="flexData[i]"
            :prop="`${data.name}.${i}.${list.name}`"
            :type="list.type"
            @change="changeField(list.name, $event)"
            @slot-change="slotChange($event, i)"
          />
        </template>
      </div>
      <el-button
        v-if="data.config?.del"
        class="flex-del-btn"
        size="small"
        @click="deleteRow(listIndex)"
      >
        {{ data.config.del }}
      </el-button>
    </div>
    <div v-if="data.config?.add" class="flex-add-btn">
      <el-button size="small" @click="addRow">
        {{ data.config.add }}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
    const temp: any = {}
    props.data.list.forEach((item: any) => {
      temp[item.name] = item.control.modelValue
      if (item.config && item.type === 'input') {
        // input select插槽
        if (typeof item.config.append === 'object') {
          temp[item.config.append.name] = item.config.append.defaultValue
        }
        if (typeof item.config.prepend === 'object') {
          temp[item.config.prepend.name] = item.config.prepend.defaultValue
        }
      }
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
  const slotChange = (obj: any, index: number) => {
    flexData.value[index][obj.name] = obj.value
  }
  onMounted(() => {
    init()
  })
</script>
