<!-- Created by 337547038 on 2022/4/29. -->
<template>
  <div>
    <table-list
      :columns="columns"
      :tableList="tableData"
      :searchData="searchData"
    >
      <template #control="scope">
        <el-button>删除{{ scope.row.name }}</el-button>
      </template>
    </table-list>
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
  import tableList from '@/components/table/index.vue'

  const columns = ref([
    {
      prop: 'date',
      label: 'Date',
      width: 150
    },
    {
      prop: 'name',
      label: 'Name'
    },
    {
      prop: 'sex',
      label: 'Sex',
      width: 160,
      formatter: (row: any) => {
        return <el-tag> { row.sex }</el-tag>
      }
    },
    {
      prop: 'control',
      label: '操作'
    }
  ])
  const tableData = ref([
    {
      date: '2022-02-22',
      name: '张三',
      sex: '男'
    },
    {
      date: '2022-02-22',
      name: '李四',
      sex: '女'
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
</script>
