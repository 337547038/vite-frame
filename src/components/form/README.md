# Form

## Props

| 参数        | 说明                                                        |
|-----------|-----------------------------------------------------------|
| data      | 表单项数据集合，参数详见field组件                                       |
| api       | 数据请求接口                                                    |
| formProps | el表单组件props参数                                             |
| before    | 操作前置方法，返回false则取消原操作。function(type,params)，可将修改后的params返回 |
| after     | 操作后置方法。  function(type,res)，可将修改后的res返回                   |
| btnText   | 表单提交按钮文案，默认['确定', '取消']，设为false不显示                        |
| params    | 附件请求参数                                                    |
| rules     | 校验规则                                                      |
| pk        | 主键，当提交的数据里包含了主键时，则提交修改接口                                  |


## Form Event

| 事件名    | 说明                            |
|--------|-------------------------------|
| submit | 表单提交事件，在验证通过后返回当前表单的值         |
| cancel | 表单取消事件，会执行表单重置方法              |
| change | 表单组件改变事件,function(name,value) |


## Form Method

| 事件名      | 说明        |
|----------|-----------|
| setValue | 用于设置初始值   |
| getValue | 用于获取表单当前值 |
| getData  | 获取表单详情数据  |
| onSubmit | 提交表单      |
| onReset  | 取消提交      |


## rules
| 类型      | 说明                                                                                          |
|---------|---------------------------------------------------------------------------------------------|
| type    | 自定义的校验类型，支持`required,mobile,tel,phone,email,int,number,money,card,cn,url`。详情`./validate.ts` |
| message | 错误提示语，可为空                                                                                   |
| trigger | 触发类型，默认blur                                                                                 |
