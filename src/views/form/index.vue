<template>
  <div>表单页</div>
</template>

<script setup lang="ts">
  import { useStore } from 'vuex'
  const store = useStore()
  store.commit('changeBreadcrumb', [{ label: '表单页面' }])
  console.log('list')
</script>
