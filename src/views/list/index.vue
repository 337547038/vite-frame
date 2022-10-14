<template>
  <div>
    <el-alert type="success">
      实现功能：<br />
      1.将后端接口常见时间类型快速格式化时间，见Date列；<br />
      2.使用tag标签显示，同时使用dict字典进行数据转换，见Sex和类型列；<br />
      3.使用dict字典进行数据转换，如状态列；<br />
      4.集成条件筛选；<br />
      5.集成分页组件；<br />
      6.集成列表数据接口请求功能；<br />
      7.无需重复复制组件el-table-column；<br />
      8.集成横向滚动条固定在浏览器底部(鼠标移到表格区域可见滚动条固定于底部)；<br />
      9.快速设置表头帮助信息；<br />
    </el-alert>
    <p></p>
    <ak-list
      :columns="columns"
      :searchData="searchData"
      apiKey="tableList"
      :fixedBottomScroll="true"
      :beforeRequest="beforeRequest"
      :afterResponse="afterResponse"
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
name:'List01'
}
</route>
<script lang="tsx">
  export default {
    name: 'List01'
  }
</script>
<script lang="tsx" setup>
  import { ref } from 'vue'

  const columns = ref([
    {
      prop: 'date',
      label: 'Date',
      width: 150,
      help: '可快速将接口的各种形式的时间值格式化',
      formatTime: 'dateTime'
    },
    {
      prop: 'name',
      label: 'Name'
    },
    {
      prop: 'sex',
      label: 'Sex',
      tag: { 0: 'info', 1: 'success' },
      dict: { 0: '女', 1: '男' }
    },
    {
      prop: 'status',
      label: '状态',
      dict: { 1: '禁用', 2: '启用' }
    },
    {
      prop: 'type',
      label: '类型',
      tag: { 1: 'info', 2: 'success', 3: 'danger' },
      dict: 'type' // 从全局dict里取type
    },
    {
      prop: 'control',
      label: '操作'
    }
  ])
  const searchData = ref([
    {
      type: 'input',
      formItem: {
        prop: 'name',
        label: 'input2'
      },
      control: {
        placeholder: '请输入'
      }
    },
    {
      type: 'select',
      formItem: {
        prop: 'select',
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
    return res.list // 需要return
  }
</script>
