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
      8.集成横向滚动条固定在浏览器底部(小屏时鼠标移到表格区域可见滚动条固定于底部)；<br />
      9.快速设置表头帮助信息；<br />
      10.为空时输出自定义值
    </el-alert>
    <p></p>
    <ak-list
      ref="listEl"
      :afterResponse="afterResponse"
      :beforeRequest="beforeRequest"
      :columns="columns"
      :controlBtn="controlBtn"
      :dict="{ type1: { 1: '类型11', 2: '类型21', 3: '类型31' } }"
      :searchData="searchData"
      requestUrl="tableList"
      @control-btn-click="getSelection"
      :searchJump="true"
    >
      <template #__control="scope">
        <el-button>编辑{{ scope.row.name }}</el-button>
      </template>
    </ak-list>
  </div>
</template>
<route>
{
name:'List01'
}
</route>
<script lang="tsx" name="List01" setup>
  import { ref } from 'vue'

  const listEl = ref()
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
      prop: 'type',
      label: '自定类型',
      tag: { 1: 'info', 2: 'success', 3: 'danger' },
      dict: 'type1', // 从全局dict里取type
      width: 150,
      placeholder: '/'
    },
    {
      prop: 'imgSrc',
      label: '头像',
      imgAttr: {
        width: 50,
        height: 50
      }
    },
    {
      prop: '__control',
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
    },
    {
      type: 'checkbox',
      name: 'type',
      formItem: {
        label: 'status'
      },
      control: {
        options: [] // 使用接口返回的type选项数据
      }
    },
    {
      type: 'select',
      name: 'select2',
      formItem: {
        label: '自定dist'
      },
      control: {},
      config: {
        optionsKey: 'type1'
      }
    }
  ])
  const controlBtn = [
    {
      plain: true,
      label: '新增',
      type: 'primary',
      icon: 'plus'
    },
    {
      plain: true,
      label: '修改',
      type: 'success',
      icon: 'edit'
    },
    {
      plain: true,
      label: '批量删除',
      type: 'danger',
      icon: 'delete',
      key: 'del'
    },
    {
      plain: true,
      label: '导出',
      type: 'warning',
      icon: 'download'
    },
    {
      plain: true,
      label: '刷新',
      type: 'info',
      icon: 'refresh'
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
  const getSelection = (obj: any, table: any) => {
    // 两种方法都可以获取到表格勾选的行数据
    const tableRow = listEl.value.table.getSelectionRows()
    const tableRow2 = table.value.getSelectionRows()
    console.log(tableRow)
    console.log(tableRow2)
    console.log(obj)
  }
</script>
