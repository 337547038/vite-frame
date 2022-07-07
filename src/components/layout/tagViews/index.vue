<template>
  <el-tabs
    v-model="activeName"
    class="tag-tabs"
    @tab-click="handleClick"
    editable
    @edit="handleTabsEdit"
  >
    <el-tab-pane
      v-for="item in tabsViews"
      :key="item.path"
      :label="item.title"
      :name="item.path"
    />
  </el-tabs>
</template>

<script lang="ts" setup>
  interface TabsViews {
    title: string
    path: string
    name: string // 路由名称name
  }
  import { ref, computed } from 'vue'
  import { useStore } from 'vuex'
  import { useRoute } from 'vue-router'
  const store = useStore()
  withDefaults(
    defineProps<{
      modelValue: string[]
    }>(),
    {
      modelValue: () => {
        return []
      }
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', value: string[]): void
  }>()
  const route = useRoute()
  const activeName = ref()
  const getInclude = computed(() => {
    let temp: string[] = []
    tabsViews.value.forEach((item: TabsViews) => {
      temp.push(item.name)
    })
    return temp
  })
  const tabsViews = computed(() => {
    // return store.state?.layout?.tabs
    return [
      {
        title: '表单页面',
        path: '/form',
        name: 'form'
      },
      {
        title: '列表页面',
        path: '/list',
        name: 'list'
      }
    ]
  })
  const handleClick = () => {}
  const handleTabsEdit = (targetName: string) => {
    const newTabs = tabsViews.value.filter((item: TabsViews) => {
      return item.path !== targetName
    })
    store.commit('setTabsViews', newTabs)
  }
  emits('update:modelValue', getInclude.value)
</script>
<style lang="scss">
  .tag-tabs {
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .el-tabs__new-tab,
    .el-tabs__content {
      display: none;
    }
    .el-tabs__nav-wrap::after {
      display: none;
    }
    .el-tabs__item {
      padding: 0 10px !important;
    }
  }
</style>
