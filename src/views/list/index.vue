<template>
  <div>列表页</div>
</template>

<script setup lang="ts">
  import { useStore } from 'vuex'
  const store = useStore()
  store.commit('changeBreadcrumb', [{ label: '列表页面' }])
  console.log('list')
</script>
