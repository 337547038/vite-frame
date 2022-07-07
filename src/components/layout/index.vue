<template>
  <el-container class="common-layout">
    <el-aside width="200px" class="container-sidebar">
      <el-menu
        :collapse="isCollapse"
        active-text-color="#ffd04b"
        background-color="rgb(48 65 86)"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon>
            <icon-menu />
          </el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon>
            <document />
          </el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <setting />
          </el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <TagViews v-model="include" />
    <el-main key="main">

      <div style="height: 20px"></div>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
  import TagViews from './tagViews/index.vue'
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting
  } from '@element-plus/icons-vue'
  const isCollapse = ref(false)
  const include = ref<string[]>([])
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>
<style lang="scss">
  html,
  body,
  div {
    margin: 0;
    padding: 0;
  }

  .common-layout {
    .container-sidebar {
      color: #fff;
      background-color: rgb(48, 65, 86);
      height: 100vh;
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
