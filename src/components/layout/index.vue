<template>
  <a-layout class="common-layout">
    <a-layout-sider
      v-if="!fullscreen"
      class="common-sidebar"
      width="250"
      v-model:collapsed="collapsed"
      collapsible
    >
      <div class="logo">
        <img src="../../assets/logo.png" /> <span>Ant Design</span></div
      >
      <Menu />
    </a-layout-sider>
    <a-layout class="main-scroll">
      <a-layout-header v-if="!fullscreen" class="common-header">
        <menu-fold-outlined
          v-if="collapsed"
          @click="collapsed = !collapsed"
          class="collapsed"
        />
        <menu-unfold-outlined
          v-else
          @click="collapsed = !collapsed"
          class="collapsed"
        />
        <reload-outlined class="reload" @click="reloadClick" />
        <a-breadcrumb>
          <a-breadcrumb-item
            ><router-link to="/">首页</router-link></a-breadcrumb-item
          >
          <a-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">
            <router-link :to="item.to" v-if="item.to">{{
              item.label
            }}</router-link>
            <span v-else>{{ item.label }}</span>
          </a-breadcrumb-item>
        </a-breadcrumb>
        <div class="comm-header-tool">
          <fullscreen-outlined
            class="header-item full"
            @click="handleFullScreen"
          />
          <header-notice class="header-item" />
          <header-avatar class="header-item" />
        </div>
      </a-layout-header>
      <a-layout-content class="common-content">
        <router-view ref="page" v-if="reloadFlag" />
      </a-layout-content>
    </a-layout>
    <fullscreen-exit-outlined
      class="full-screen-exit"
      @click="fullscreen = false"
      v-if="fullscreen"
    />
  </a-layout>
</template>

<script lang="ts" setup>
  import '../../assets/scss/layout.scss'
  import { ref, computed, nextTick } from 'vue'
  import { useStore } from 'vuex'
  import HeaderNotice from './headerNotice.vue'
  import HeaderAvatar from './headerAvatar.vue'
  import Menu from './menu.vue'

  const collapsed = ref<boolean>(false)
  const fullscreen = ref<boolean>(false)
  const handleFullScreen = () => {
    fullscreen.value = !fullscreen.value
    /*let element = document.documentElement
    // 判断是否已经是全屏
    // 如果是全屏，退出
    if (fullscreen.value) {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
      // console.log('已还原！');
    } else {
      // 否则，进入全屏
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.msRequestFullscreen) {
        // IE11
        element.msRequestFullscreen()
      }
      // console.log('已全屏！');
    }
    // 改变当前全屏状态
    fullscreen.value = !fullscreen.value*/
  }
  const store = useStore()
  const breadcrumb = computed(() => {
    return store.state?.layout?.breadcrumb
  })
  const reloadFlag = ref<boolean>(true)
  const reloadClick = () => {
    reloadFlag.value = false
    nextTick(() => {
      reloadFlag.value = true
    })
  }
</script>
