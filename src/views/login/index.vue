<template>
  <div class="login">
    <div class="main">
      <h3>后台管理系统</h3>
      <ak-form :afterSubmit="afterSubmit" :data="data" submitUrl="userLogin" />
    </div>
  </div>
</template>
<route>
{ meta:{title:'登录',layout:'hidden'} }
</route>
<script lang="ts" setup>
  import { ref, markRaw, nextTick } from 'vue'
  import { useRouter } from 'vue-router'
  import CodeCom from './components/code.vue'
  import { setStorage } from '@/utils'

  const router = useRouter()
  const data = ref([
    {
      type: 'input',
      name: 'userName',
      formItem: {
        rules: [
          {
            required: true,
            message: '请输入登录账号',
            trigger: 'change'
          }
        ]
      },
      control: {
        prefixIcon: 'User',
        placeholder: '账号'
      },
      config: {}
    },
    {
      type: 'input',
      name: 'password',
      formItem: {
        rules: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'change'
          }
        ]
      },
      control: {
        prefixIcon: 'Lock',
        type: 'password',
        placeholder: '密码'
      },
      config: {}
    },
    {
      type: 'component',
      name: 'component',
      component: markRaw(CodeCom),
      control: {
        placeholder: '验证码'
      },
      formItem: {
        label: '',
        rules: [
          {
            required: true,
            message: '验证码',
            trigger: 'change'
          }
        ]
      }
    },
    {
      type: 'button',
      list: [
        {
          size: 'large',
          type: 'primary',
          label: '登录',
          key: 'submit' // 内置提交事件
          /*click: formValue => {
          console.log('click', formValue)
        }*/
        }
      ]
    }
  ])
  const afterSubmit = (res: any) => {
    // 保存token
    setStorage('token', res.token)
    nextTick(() => {
      router.push({ path: '/' })
    })
  }
</script>

<style lang="scss" scoped>
  .login {
    background-color: #72767b;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main {
    width: 400px;
    padding: 25px;
    border-radius: 6px;
    background: #fff;

    h3 {
      font-size: 18px;
      text-align: center;
      font-weight: 400;
    }
  }

  .form-btn {
  }

  :deep(.el-button) {
    width: 100%;
  }
</style>
