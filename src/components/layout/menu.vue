<template>
  <el-menu
    :collapse="collapse"
    active-text-color="#ffd04b"
    background-color="rgb(48 65 86)"
    text-color="#fff"
    @select="select"
  >
    <MenuItem :data="navList" />
  </el-menu>
</template>

<script setup lang="ts">
  import MenuItem from './menuItem.vue'
  import { ref, onMounted, watch } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { useLayoutStore } from '@/store/layout'

  const router = useRouter()
  const route = useRoute()
  const store = useLayoutStore()
  // store.commit('changeBreadcrumb', [{ label: '表单页面' }])

  withDefaults(
    defineProps<{
      collapse: boolean
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'getMenuList', val: any): void
  }>()
  const navList = ref([
    {
      title: '首页',
      path: '/',
      icon: 'HomeFilled'
    },
    {
      title: '表单页面',
      path: '/form',
      icon: 'location'
    },
    {
      title: '列表页面',
      path: '/list',
      icon: 'collection'
    },
    {
      title: '测试',
      path: '/test',
      icon: 'collection'
    },
    {
      title: '用户管理',
      icon: 'user',
      children: [
        {
          title: '新增用户',
          path: '/test'
        },
        {
          title: '用户列表',
          children: [
            {
              title: '普通用户',
              path: '/test'
            },
            {
              title: '合作用户',
              path: '/test'
            },
            {
              title: '合作用户2',
              path: '/test'
            }
          ]
        }
      ]
    },
    {
      title: '系统管理',
      icon: 'setting',
      children: [
        {
          title: '用户管理',
          path: '/test'
        },
        {
          title: '角色管理',
          path: '/test'
        },
        {
          title: '菜单管理',
          path: '/test'
        },
        {
          title: '登录日志',
          path: '/test'
        },
        {
          title: '操作管理',
          path: '/test'
        }
      ]
    }
  ])
  const select = (index: string) => {
    router.push({ path: index })
  }
  console.log(route)
  watch(
    () => route.path,
    () => {
      // 根据path从navList里取title，多级时可在当前页面中修改changeBreadcrumb
      navList.value.forEach((item) => {
        if (item.path === route.path) {
          store.changeBreadcrumb([{ label: item.title }])
        }
      })
    }
  )
  onMounted(() => {
    // 将导航信息传给tagViews，根据path匹配出显示的title
    emits('getMenuList', navList.value)
  })
</script>
