<template>
  <el-icon @click="collapseClick" class="collapse-icon"><Fold /></el-icon>
  <el-icon><RefreshRight /></el-icon>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
  <div>Header</div>
</template>

<script setup lang="ts">
  import { Fold, RefreshRight } from '@element-plus/icons-vue'
  withDefaults(defineProps<{}>(), {})
  const emits = defineEmits<{
    (e: 'click', type: string): void
  }>()
  const collapseClick = () => {
    emits('click', 'collapse')
  }
</script>
