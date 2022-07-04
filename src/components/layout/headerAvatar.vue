<template>
  <a-dropdown>
    <div class="header-avatar" style="cursor: pointer">
      <a-avatar class="avatar" size="small" shape="circle" :src="user.avatar" />
      <span class="name">{{ user.name }}</span>
    </div>
    <template #overlay>
      <a-menu class="avatar-menu">
        <a-menu-item>
          <user-outlined />
          <span class="title">个人中心</span>
        </a-menu-item>
        <a-menu-item>
          <setting-outlined />
          <span class="title">设置</span>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item @click="logout">
          <poweroff-outlined style="margin-right: 8px" />
          <span class="title">退出登录</span>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script>
  export default {
    name: 'HeaderAvatar',
    data() {
      return {
        user: {
          name: 'userName',
          avatar: 'https://cdn.eleadmin.com/20200610/avatar.jpg'
        }
      }
    },
    methods: {
      logout() {
        logout()
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="scss">
  .header-avatar {
    display: inline-flex;
    .avatar,
    .name {
      align-self: center;
    }
    .avatar {
      margin-right: 8px;
    }
    .name {
      font-weight: 500;
    }
  }
  .avatar-menu {
    width: 150px;
    .title {
      margin-left: 10px;
    }
  }
</style>
