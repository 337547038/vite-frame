<template>
  <a-menu mode="inline" theme="dark" @click="click">
    <MenuItem :data="navList" />
  </a-menu>
</template>

<script lang="ts" setup>
  import MenuItem from './menuItem.vue'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const click = (obj: any) => {
    console.log(obj)
    router.push({ path: obj.key })
  }
  const navList = ref([
    {
      title: '首页',
      path: '/',
      icon: 'homeOutlined'
    },
    {
      title: '表单页面',
      path: '/form',
      icon: 'orderedListOutlined'
    },
    {
      title: '列表页面',
      path: '/list',
      icon: 'fileProtectOutlined'
    },
    {
      title: '用户管理',
      icon: 'userOutlined',
      children: [
        {
          title: '新增用户'
        },
        {
          title: '用户列表',
          children: [
            {
              title: '普通用户'
            },
            {
              title: '合作用户'
            }
          ]
        }
      ]
    },
    {
      title: '系统管理',
      icon: 'settingOutlined',
      children: [
        {
          title: '用户管理'
        },
        {
          title: '角色管理'
        },
        {
          title: '菜单管理'
        },
        {
          title: '登录日志'
        },
        {
          title: '操作管理'
        }
      ]
    }
  ])
</script>
