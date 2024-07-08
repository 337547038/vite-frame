# Form

## Props

| 参数            | 说明                                 |
|---------------|------------------------------------|
| data          | 表单项数据集合                            |
| submitApi     | 表单提交接口api，不传api时可通过submit事件提交表单    |
| formProps     | el表单组件props参数                      |
| beforeSubmit  | 表单提交前方法，仅在submitApi为真时             |
| afterSubmit   | 表单提交后方法，仅在submitApi为真时             |
| btnText       | 表单提交按钮文案，默认['确定', '取消']，设为false不显示 |
| getApi        | 表单获取数据接口api，当表单存在修改时，可使用此参数请求接口    |
| beforeRequest | 获取数据提交前方法，仅在getApi为真时              |
| afterRequest  | 获取数据提交后方法，仅在getApi为真时              |
| hideField     | 需要隐藏的表单项集合                         |

## Form Event

| 事件名    | 说明                            |
|--------|-------------------------------|
| submit | 表单提交事件，在验证通过后返回当前表单的值         |
| cancel | 表单取消事件，会执行表单重置方法              |
| change | 表单组件改变事件,function(name,value) |

## Form Method

| 事件名        | 说明        |
|------------|-----------|
| setValue   | 用于设置初始值   |
| getValue   | 用于获取表单当前值 |
| setOptions | 用于设置下拉项   |

## Form data

| 参数         | 说明                                                                                                                      |
|------------|-------------------------------------------------------------------------------------------------------------------------|
| type       | 组件类型，支持`input、cascader、checkbox、datePicker、inputNumber、select、switch、timePicker、timeSelect、upload、slider、component、div` |
| formItem   | 表单formItem组件相关参数                                                                                                        |
| control    | 对应type类型的组件所有参数                                                                                                         |
| modelValue | 当前表单值                                                                                                                   |
| component  | import的组件，仅在`type=component`时                                                                                           |
| config     | 其他一些配置信息                                                                                                                |

## data.customRules校验
| 类型      | 说明                                                                                          |
|---------|---------------------------------------------------------------------------------------------|
| type    | 自定义的校验类型，支持`required,mobile,tel,phone,email,int,number,money,card,cn,url`。详情`./validate.ts` |
| message | 错误提示语，可为空                                                                                   |
| trigger | 触发类型，默认blur                                                                                 |

## data.config
| 类型            | 类型             | 说明                                                              |
|---------------|----------------|-----------------------------------------------------------------|
| linkValue     | string         | 联动条件设置,`$`表示当前表单的值                                              |
| linkResult    | string         | 联动显示结果，可选`disabled`，默认隐藏                                        |
| optionsKey    | string/boolean | 当前项options数据关联字典数据的标识，为false时表示不关联，即选项数据不会匹配setOptions和接口dict数据 |
| url           | string         | 通过url获取数据，可使用`${text}`带一个动态参数                                   |
| method        | string         | 可选get或post                                                      |
| params        | object         | 通过url获取数据请求参数                                                   |
| afterResponse | function       | 请求结果方法                                                          |
