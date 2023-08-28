<template>
  <div>
    <ak-list
      ref="listEl"
      :afterResponse="afterResponse"
      :beforeRequest="beforeRequest"
      :columns="columns"
      :controlBtn="controlBtn"
      :searchJump="true"
      requestUrl="tableList"
    >
      <template #control="scope">
        <el-button>修改{{ scope.row.name }}</el-button>
      </template>
    </ak-list>
    <el-dialog v-model="dialogVisible" title="新增分类">
      <ak-form :data="dialogForm" ref="dialogFormEl" :submitUrl="submitUrl" />
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogConfirm">确认</el-button>
          <el-button @click="dialogVisible = false"> 取消 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="tsx" setup>
  import { ref } from 'vue'

  const listEl = ref()
  const columns = ref([
    {
      type: 'index',
      label: 'ID',
      width: 80
    },
    {
      prop: 'name',
      label: '分类名称'
    },
    {
      prop: 'sort',
      label: '排序'
    },
    {
      prop: 'control',
      label: '操作',
      width: 250
    }
  ])
  const controlBtn = [
    {
      label: '新增分类',
      type: 'primary',
      onClick: () => {
        console.log('click')
      }
    }
  ]
  const beforeRequest = (params: any) => {
    // console.log(params)
    return params // 需要return
  }
  const afterResponse = (res: any) => {
    // console.log(res)
    return res // 需要return
  }
  // 新增编辑相关
  const submitUrl = ref('/course/save')
  const dialogFormEl = ref()
  const dialogVisible = ref(true)
  const dialogForm = ref([
    {
      type: 'input',
      name: 'name',
      formItem: {
        label: '分类名称',
        rules: [
          {
            required: true,
            message: '请输入分类名称',
            trigger: 'change'
          }
        ]
      }
    },
    {
      type: 'inputNumber',
      name: 'sort',
      formItem: {
        label: '分类排序',
        rules: [
          {
            required: true,
            message: '请输入分类名称',
            trigger: 'change'
          }
        ]
      },
      control: {
        modelValue: 1
      }
    }
  ])
  const dialogConfirm = () => {
    //const val = dialogFormEl.value.getValue()
    //console.log(val)
    dialogFormEl.value.onSubmit()
  }
</script>
