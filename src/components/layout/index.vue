<template>
  <el-container class="common-layout">
    <el-aside
      v-if="!fullScreen"
      :width="isCollapse ? '64px' : '220px'"
      class="common-sidebar"
    >
      <div class="logo">
        <img src="@/assets/logo.png" />
        <span v-show="!isCollapse">XX管理系统</span>
      </div>
      <Menu :collapse="isCollapse" @get-menu-list="getMenuList" />
    </el-aside>
    <el-container class="common-container">
      <el-header v-if="!fullScreen" class="common-header">
        <CommonHeader :collapse="isCollapse" @click="headClick" />
      </el-header>
      <TagViews v-if="!fullScreen" :navList="navList" />
      <el-main class="common-main">
        <router-view v-slot="{ Component }" v-if="reloadFlag">
          <keep-alive :include="keepAliveInclude">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
    <el-icon
      v-if="fullScreen"
      class="quit-full"
      title="退出全屏"
      @click="headClick('fullScreen')"
    >
      <Close />
    </el-icon>
  </el-container>
</template>

<script lang="ts" setup>
  import '@/assets/scss/layout.scss'
  import { ref, computed, nextTick } from 'vue'
  import { useLayoutStore } from '@/store/layout'
  import TagViews from './tagViews.vue'
  import Menu from './menu.vue'
  import CommonHeader from './header.vue'

  const store = useLayoutStore()
  const isCollapse = ref(false)
  const fullScreen = ref(false)
  const reloadFlag = ref(true)
  const navList = ref([])
  const headClick = (type: string) => {
    if (type === 'collapse') {
      isCollapse.value = !isCollapse.value
    }
    if (type === 'fullScreen') {
      fullScreen.value = !fullScreen.value
    }
    if (type === 'refresh') {
      reloadFlag.value = false
      nextTick(() => {
        reloadFlag.value = true
      })
    }
  }
  const getMenuList = (obj: any) => {
    navList.value = obj
  }
  const keepAliveInclude = computed(() => {
    const tag = store?.tabs
    if (tag) {
      const temp: string[] = []
      tag.forEach((item: any) => {
        temp.push(item.name)
      })
      return temp
    }
    return []
  })
</script>
