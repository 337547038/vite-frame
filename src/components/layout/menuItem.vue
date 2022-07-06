<template>
  <template v-for="(item, index) in data" :key="index">
    <a-sub-menu v-if="item.children" :key="item.path || item.title + index">
      <template #icon>
        <component :is="item.icon" />
      </template>
      <template #title>{{ item.title }}</template>
      <menu-item :data="item.children" />
    </a-sub-menu>
    <a-menu-item v-else :key="item.path || item.title + index">
      <template #icon>
        <component :is="item.icon" />
      </template>
      <span>{{ item.title }}</span>
    </a-menu-item>
  </template>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      data: string[]
    }>(),
    {
      data: () => {
        return []
      }
    }
  )
</script>
