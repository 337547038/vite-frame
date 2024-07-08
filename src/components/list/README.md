# TableList 列表


## API

### Props

| 参数                | 类型             | 说明                                                                   |
|-------------------|----------------|----------------------------------------------------------------------|
| props             | object         | 表格所有可用props，直接绑定在el-table上                                           |
| columns           | array          | 用于渲染el-columns-table列，所有参数绑定于当前组件                                    |
| pk                | number/sting   | 行数据主键                                                                |
| params            | object         | 列表数据请求附加参数                                                           |
| api               | object         | api.list列表数据api接口,api.del删除api接口,api.edit修改保存api,用于列表中的switch切换各种状态时 |
| before            | function       | 操作前置方法，返回false则取消原操作。function(type,params)，可将修改后的params返回            |
| after             | function       | 操作后置方法。  function(type,res)，可将修改后的res返回                              |
| controlBtn        | array          | 表格上方控制按钮组，同columns.buttons。内置了`key=add/edit/del`三种觉类型                |
| pagination        | object/boolean | 分页信息{ pageSize: number; current: number } ，为false时不显示分页              |
| showSearch        | boolean        | 是否显示条件查询，默认true                                                      |
| fixedBottomScroll | boolean/string | 固定横向滚动条在底部,可为节点类名                                                    |

### props.columns
| 参数           | 类型             | 说明                                                                    |
|--------------|----------------|-----------------------------------------------------------------------|
| help         | string         | 表头tooltip提示信息                                                         |
| render       | string         | 渲染类型，可选`switch、image、tag、url、datetime、date、buttons、string`，默认string   |
| attr         | object         | 附加属性，当`render=switch、image、tag`组件的props。                              |
| replaceValue | object         | 仅当`render=tag`时,{ '1': '启用', '0': '禁用' }                              |
| custom       | object         | 仅当`render=tag`时,{ '1': 'success', '0': 'danger' }                     |
| timeFormat   | string         | 仅当`render=datetime、date`时，对日期格式化，如YYYY年MM月dd日                         |
| target       | string         | 仅当`render=url`时，渲染为a标签的打开方式`_blank、_self`                             |
| buttons      | array          | 仅当`render=buttons`时，表格行右侧边按钮，详情见`自定义表格行右侧边按钮 `                        |
| search       | object/boolean | 查询表单设单，配置将绑定在当前input组件，false时表示查询不显示该字段，见`components/field/index.vue` |
| show         | boolean        | 不在列表中显示，可选值false                                                      |
| －            | －              | 所有`el-table-column`属性                                                 |


### Event

| 参数     | 说明       |
|--------|----------|
|formFieldChange| 筛选表单改变事件 |



### Methods

| 参数               | 说明         |
|------------------|------------|
| getData          | 用于获取表格列表数据 |
| getSelectionRows | 返回当前选中的行   |
| table            | 表格实例       |
| setFormValue     | 设置筛选表单初始值  |

### slot

| 插槽名           | 说明                                                                  |
|---------------|---------------------------------------------------------------------|
| default       | 搜索表单和表格列表之间                                                         |
| tablePrepend  | 表格列表上方                                                              |
| tableAppend   | 表格列表和分页之间                                                           |
| btnAppend     | 表格列表顶部操作按钮后面，这里可自定义其他按钮                                             |
| 任意            | 使用columns的prop为插槽名称，可用值{index:Number,row:any,prop:String,value:any} |


### 自定义表格行右侧边按钮

我们内置了常见的编辑、查看、删除三个按钮，只需按约定的key值设置即可快速设置
```js
const btn={
   render: 'buttons',
   buttons: [
       {
           key:'edit'
           //其他值属性可继续设置
       },
       {
           key:'detail'
       },
       {
           key:'del'
       }
   ]
}
//自定义一个新的按钮
const newBtn={
    render:'buttons',
    buttos:[
        {
            key:'edit'
        },
        {
            // 渲染方式:tooltip=带tip的按钮,confirm=带确认框的按钮，空为正常的按钮
            render: 'tooltip',
            name: '', // 按钮名称
            title: '', // 鼠标放置时的 title 提示
            label: '', // 直接在按钮内显示的文字，title 有值时可为空
            class: '',
            type: 'primary', // 按钮类型，请参考 element plus 的按钮类型
            icon: '', // 按钮 icon
            popConfirm: {}, //自定popConfirm属性，当render=confirm
            // 自定义点击事件
            click: (row: { [key: string]: any }) => {
                
            },
            // 按钮是否显示，true显示
            display: (row: { [key: string]: any }) =>{
                return true
            },
            // 按钮是否禁用，true禁用
            disabled: (row: { [key: string]: any }) => {
                return false
            },
            // 自定义el-button属性
            attr: {}
        }
    ]
}
```

### 完全自定义公共搜索的组件
```javascript
import myCompontents from './myDiy.vue'
const columns=[
    {
        prop: 'diy',
        label: '自定义筛选',
        show: false,
        search: {
            type: 'component',
            component: markRaw(myCompontents)
        }
    }
]
```
```vue
<!--myDiy.vue内容为：-->
<template>
  <el-input v-model="model" />
</template>
<script setup lang="ts">
  const model = defineModel()
</script>
```