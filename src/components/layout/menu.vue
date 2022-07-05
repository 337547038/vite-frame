<template>
  <a-menu mode="inline" theme="dark" @click="click">
    <a-menu-item key="/form">
      <template #icon>
        <InboxOutlined />
      </template>
      <span>表单</span>
    </a-menu-item>
    <a-menu-item key="/flow">
      <template #icon>
        <InboxOutlined />
      </template>
      <span>审批流程</span>
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #icon>
        <MailOutlined />
      </template>
      <template #title>Navigation One</template>
      <a-menu-item key="5">Option 5</a-menu-item>
      <a-menu-item key="6">Option 6</a-menu-item>
      <a-menu-item key="7">Option 7</a-menu-item>
      <a-menu-item key="8">Option 8</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>Navigation Two</template>
      <a-menu-item key="9">Option 9</a-menu-item>
      <a-menu-item key="10">Option 10</a-menu-item>
      <a-sub-menu key="sub3" title="Submenu">
        <a-menu-item key="11">Option 11</a-menu-item>
        <a-menu-item key="12">Option 12</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
  </a-menu>
</template>

<script lang="ts" setup>
  //import routesPage from 'virtual:generated-pages'
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const click = (obj: any) => {
    router.push({ path: obj.key })
  }
</script>
