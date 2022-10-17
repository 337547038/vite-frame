<template>
  <div>index2</div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import { onMounted, nextTick } from 'vue'
  const router = useRouter()
  onMounted(() => {
    console.log(router)
    nextTick(() => {
      router.push({ path: '/form' })
    })
  })
</script>
