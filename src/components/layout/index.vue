<template>
  <a-layout class="common-layout">
    <a-layout-sider
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
      <a-layout-header class="common-header">
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
        <reload-outlined class="reload" />
        <a-breadcrumb>
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item
            ><a href="">Application Center</a></a-breadcrumb-item
          >
          <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
          <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="comm-header-tool">
          <fullscreen-outlined
            class="header-item full"
            @click="handleFullScreen"
          />
          <a-icon class="header-notice-icon header-item" type="bell" />
          <header-notice class="header-item" />
          <header-avatar class="header-item" />
        </div>
      </a-layout-header>
      <a-layout-content class="common-content">
        <router-view ref="page" />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import HeaderNotice from './headerNotice.vue'
  import HeaderAvatar from './headerAvatar.vue'
  import Menu from './menu.vue'

  const collapsed = ref<boolean>(false)
  const fullscreen = ref<boolean>(false)
  const handleFullScreen = () => {
    let element = document.documentElement
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
    fullscreen.value = !fullscreen.value
  }
</script>
<style lang="scss">
  html,
  body,
  div,
  p,
  h1,
  h2,
  h3,
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  .ant-input {
    padding: 2px 10px;
  }
  .common-layout {
    .main-scroll {
      height: 100vh;
      overflow-y: auto;
      overflow-x: hidden;
      box-sizing: border-box;
    }
    .common-sidebar {
      box-shadow: 2px 0 6px rgb(0 21 41 / 35%);
      color: #fff;
      background-color: #000;
      height: 100vh;
      .logo {
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 700;
        height: 60px;
        justify-content: center;
        img {
          width: 30px;
          height: 30px;
        }
      }
      &.ant-layout-sider-collapsed {
        .logo {
          span {
            display: none;
          }
        }
      }
      .ant-layout-sider-trigger {
        display: none;
      }
    }
    .common-header {
      background: #fff;
      height: 60px;
      padding: 0 20px;
      line-height: normal;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1px;
      box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
      .collapsed {
        font-size: 18px;
      }
      .reload {
        margin: 0 20px;
        cursor: pointer;
      }
    }
    .common-content {
      padding: 15px;
    }
    .comm-header-tool {
      flex: 2;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .header-item {
        margin-right: 15px;
      }
      .full {
        margin-right: 0;
        cursor: pointer;
      }
    }
  }
</style>
