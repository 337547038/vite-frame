<template>
  <el-container class="common-layout">
    <el-aside :width="isCollapse ? '64px' : '220px'" class="common-sidebar">
      <div class="logo"
        ><img src="../../assets/logo.png" />
        <span v-show="!isCollapse">XX管理系统</span></div
      >
      <Menu :collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header class="common-header">
        <CommonHeader @click="headClick" />
        <TagViews v-model="include" />
      </el-header>
      <el-main class="common-main">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
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
  import Menu from './menu.vue'
  import CommonHeader from './header.vue'

  const isCollapse = ref(false)
  const headClick = (type: string) => {
    if (type === 'collapse') {
      isCollapse.value = !isCollapse.value
    }
  }
    const include = ref<string[]>([])
  }
</script>
<style lang="scss">
  html,
  body,
  div {
    margin: 0;
    padding: 0;
  }
  @mixin scrollColor($color) {
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      position: relative;
      z-index: 100;
    }
    &::-webkit-scrollbar-thumb {
      background-color: $color;
      background-clip: padding-box;
      min-height: 28px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-corner {
      background: $color;
    }
    /*&::-webkit-scrollbar:$colorGray2; //滚动条整体部分
    ::-webkit-scrollbar-button:''; //滚动条两端的按钮
    ::-webkit-scrollbar-track:'';  //外层轨道
    ::-webkit-scrollbar-track-piece:'';  //内层滚动槽
    ::-webkit-scrollbar-thumb:$colorGray3; //滚动的滑块
    ::-webkit-scrollbar-corner:''; //边角
    ::-webkit-resizer //定义右下角拖动块的样式*/
  }
  .common-layout {
    .common-sidebar {
      transition: all 0.3s;
      box-shadow: 2px 0 6px rgb(0 21 41 / 35%);
      color: #fff;
      background-color: rgb(48 65 86);
      height: 100vh;
      overflow-x: hidden;
      @include scrollColor(#6c5155);
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
      .el-menu {
        border-right: 0;
      }
    }
    .common-header {
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      .collapse-icon {
        cursor: pointer;
        font-size: 18px;
      }
    }
    .common-main {
      background: #f0f2f5;
      @include scrollColor(#cecfd0);
    }
  }
  /*.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }*/
</style>
