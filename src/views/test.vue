<template>
  <div>
    <el-button @click="getSelect">get</el-button>
    <ak-list
      :columns="columns"
      :searchData="searchData"
      :formConfig="formConfig"
      apiKey="tableList"
      :fixedBottomScroll="true"
      :beforeRequest="beforeRequest"
      :afterResponse="afterResponse"
      ref="listEl"
      :dict="{ type1: { 1: '类型11', 2: '类型21', 3: '类型31' } }"
    >
      <template #control="scope">
        <el-button>删除{{ scope.row.name }}</el-button>
      </template>
    </ak-list>
  </div>
</template>
<route>
{
name:'List0155'
}
</route>
<script lang="tsx">
  export default {
    name: 'List01555'
  }
</script>
<script lang="tsx" setup>
  import { ref } from 'vue'
  const listEl = ref()
  const formConfig = ref({
    btnText: ['查询', '清空'],
    formProps: { inline: true }
  })
  const columns = ref([
    {
      type: 'selection',
      label: '序号'
    },
    {
      prop: 'date',
      label: 'Date',
      width: 250,
      help: '可快速将接口的各种形式的时间值格式化',
      formatTime: 'dateTime'
    },
    {
      prop: 'name',
      label: 'Name',
      width: 250,
      placeholder: '/' // 为空时输出/
    },
    {
      prop: 'sex',
      label: 'Sex',
      tag: { 0: 'info', 1: 'success' },
      dict: { 0: '女', 1: '男' },
      width: 150,
      placeholder: '/'
    },
    {
      prop: 'status',
      label: '状态',
      dict: { 1: '禁用', 2: '启用' },
      width: 150,
      placeholder: '/'
    },
    {
      prop: 'type',
      label: '类型',
      tag: { 1: 'info', 2: 'success', 3: 'danger' },
      dict: 'type', // 从全局dict里取type
      width: 150,
      placeholder: '/'
    },
    {
      prop: 'control',
      label: '操作',
      width: 250
    }
  ])
  const searchData = ref([
    {
      type: 'input',
      name: 'name',
      formItem: {
        label: 'input2'
      },
      control: {
        placeholder: '请输入'
      }
    },
    {
      type: 'select',
      name: 'select',
      formItem: {
        label: 'select'
      },
      control: {
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          }
        ]
      }
    }
  ])
  const beforeRequest = (params: any) => {
    console.log(params)
    return params // 需要return
  }
  const afterResponse = (res: any) => {
    console.log(res)
    return res // 需要return
  }
  const getSelect = () => {
    const table = listEl.value.tableEl.getSelectionRows()
  }
</script>
