# AK-List
二次封装的表格列表，实现常用功能：

>✔1.集成条件搜索
> 
>✔2.集成分页功能
> 
>✔3.集成列表数据接口请求功能
> 
>✔4.时间单元格快速格式化
> 
>✔5.可快速显示tag样式
> 
>✔6.集成数据值字典转换
> 
>✔7.无需重复复制组件el-table-column
> 
>✔8.集成横向滚动条固定在浏览器底部
> 
>✔9.快速设置表头帮助信息

## 使用
```vue
<ak-list :columns="columns"></ak-list>
```

## API
 ### Props
| 参数                | 类型             | 说明                                 |
|-------------------|----------------|------------------------------------|
| tableProps        | object         | 对应table组件的props参数                  |
| columns           | array          | 表格列数据                              |
| searchData        | array          | 条件筛选表单数据                           |
| formProps         | el表单组件props参数  |
| requestUrl        | string         | 请求接口api                            |
| deleteUrl         | string         | 删除接口api                            |
| beforeRequest     | function       | 请求列表数据之前方法，可对请求参数进行处理，返回false时取消请求 |
| afterResponse     | function       | 请求到列表数据处理后返回表格列表所需数据               |
| showPage          | boolean/true   | 是否显示分页信息                           |
| dict              | object         | 用于匹配的字典数据，一般不设置，从接口获取并合并           |
| fixedBottomScroll | boolean/string | 固定横向滚动条在底部,可为节点类名                  |
| controlBtn        | array          | 表格上方控制按钮                           |
| searchJump        | boolean        | 筛选表单查询点击时是否跳转页面,即使用url传参形式         |
| showDelBtn        | boolean/true   | 表格操作栏显示删除按钮，约定操作栏`prop=__control`  |
| columnsSetting    | boolean/true   | 表格上方列表字段设置按钮                       |

### columns 扩展
| 参数          | 类型            | 说明                                                  |
|-------------|---------------|-----------------------------------------------------|
| formatTime  | string        | 时间类型快速格式化，可为`date/dateTime`或是其它指定格式，如`{y}年{m}月{d}日` |
| help        | string        | 表头tooltip提示信息                                       |
| tag         | object        | tag显示信息                                             |
| dict        | object/string | dict字典匹配，为string时将匹配全局的dict                         |
| placeholder | string        | 为空时显示                                               |

### Methods
| 参数       | 说明           |
|----------|--------------|
| getData  | 列表请求方法，可手动调用 |
| table    | 表格所有方法集合     |
| formEl   | 筛选表单所有方法集合   |
| delClick | 通用删除方法       |

### Event
| 参数          | 说明                            |
|-------------|-------------------------------|
| controlBtn  | 控制按钮点击事件，约定`key='del'`时执行删除方法 |
| delRowClick | 删除数据事件                        |


### Slot
| 参数          | 说明              |
|-------------|-----------------|
| beforeTable | 位于数据表格列表上方      |
| afterTable  | 位于数据列表和分页之间     |
| afterSearch | 位于条件筛选表单下方      |
| -           | columns对应的props |


## 示例
```vue
<template>
  <div>
    <ak-list
      :columns="columns"
      :searchData="searchData"
    >
      <template #__control="scope">
        <el-button>删除{{ scope.row.name }}</el-button>
      </template>
    </ak-list>
  </div>
</template>
<script lang="tsx" setup>
  import { ref } from 'vue'
  const columns = ref([
    {
      prop: 'date',
      label: 'Date',
      width: 250,
      help: '可快速将接口的各种形式的时间值格式化',
      formatTime: 'dateTime' // 日期时间类型
    },
    {
      prop: 'name',
      label: 'Name',
      width: 250
    },
    {
      prop: 'sex',
      label: 'Sex',
      tag: { 0: 'info', 1: 'success' },
      dict: { 0: '女', 1: '男' },
      width: 150
    },
    {
      prop: 'status',
      label: '状态',
      dict: { 1: '禁用', 2: '启用' },
      width: 150,
      placeholder:'' // 当对应值为空或undefined时占位符
    },
    {
      prop: 'type',
      label: '类型',
      tag: { 1: 'info', 2: 'success', 3: 'danger' },
      dict: 'type', // 从全局prop.dict里取type
      width: 150
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
    }
  ])
</script>

```
