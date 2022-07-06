<template>
  <div> index</div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()
  store.commit('changeBreadcrumb', [])
</script>
