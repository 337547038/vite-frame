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
| 参数                | 类型             | 说明                       |
|-------------------|----------------|--------------------------|
| tableProps        | object         | 对应table组件的props参数        |
| columns           | array          | 表格列数据                    |
| searchData        | array          | 条件筛选表单数据                 |
| apiKey            | string         | 请求接口api                  |
| beforeRequest     | function       | 请求列表数据之前方法，可对请求参数进行处理    |
| afterResponse     | function       | 请求到列表数据处理后返回表格列表所需数据     |
| showPage          | boolean/true   | 是否显示分页信息                 |
| dict              | object         | 用于匹配的字典数据，一般不设置，从接口获取并合并 |
| fixedBottomScroll | boolean/string | 固定横向滚动条在底部,可为节点类名        |

### columns 扩展
| 参数         | 类型            | 说明                                                  |
|------------|---------------|-----------------------------------------------------|
| formatTime | string        | 时间类型快速格式化，可为`date/dateTime`或是其它指定格式，如`{y}年{m}月{d}日` |
| help       | string        | 表头tooltip提示信息                                       |
| tag        | object        | tag显示信息                                             |
| dict       | object/string | dict字典匹配，为string时将匹配全局的dict                         |
| -          | -             | 对应el-table-columns所有props                           |

### Methods
| 参数      | 说明           |
|---------|--------------|
| getData | 列表请求方法，可手动调用 |

### Event
| 参数            | 说明                    |
|---------------|-----------------------|

### Slot
| 参数         | 说明                               |
|------------|----------------------------------|
| default    | 位于筛选表单和表格列表间，可用于存放添加删除数据的按钮或其他操作 |
| controlBtn | 位于筛列表可配置新增删除按钮后面                 |
| searchForm | 位于条件筛选表单内部                       |
| -          | columns对应的props                  |
