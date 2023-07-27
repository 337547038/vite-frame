<template>
  <template v-for="(item, index) in data" :key="index">
    <el-sub-menu v-if="item.children" :index="item.path || item.title + index">
      <template #title>
        <el-icon>
          <component :is="item.icon" />
        </el-icon>
        <span>{{ item.title }}</span>
      </template>
      <menu-item :data="item.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.path || item.title + index">
      <el-icon>
        <component :is="item.icon" />
      </el-icon>
      <span>{{ item.title }}</span>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
  interface MenuData {
    children?: MenuData[]
    path?: string
    title: string
    icon?: string
  }

  withDefaults(
    defineProps<{
      data: MenuData[]
    }>(),
    {
      data: () => {
        return []
      }
    }
  )
</script>
