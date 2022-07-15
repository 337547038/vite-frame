# Form

## Form

| 参数            | 说明                              |
|---------------|---------------------------------|
| data          | 表单项数据集合                         |
| submitApi     | 表单提交接口api，不传api时可通过submit事件提交表单 |
| formProps     | el表单组件props参数                   |
| beforeSubmit  | 表单提交前方法，仅在submitApi为真时          |
| afterSubmit   | 表单提交后方法，仅在submitApi为真时          |
| btnText       | 表单提交按钮文案，默认['确定', '取消']         |
| showBtn       | 是否显示表单提交按钮                      |
| getApi        | 表单获取数据接口api，当表单存在修改时，可使用此参数请求接口 |
| beforeRequest | 获取数据提交前方法，仅在getApi为真时           |
| afterRequest  | 获取数据提交后方法，仅在getApi为真时           |

## Form Event

| 事件名    | 说明               |
|--------|------------------|
| submit | 表单提交事件，在验证通过后    |
| cancel | 表单取消事件，会执行表单重置方法 |

## Form data

| 参数         | 说明                           |
|------------|------------------------------|
| type       | 组件类型，支持`input、cascader、checkbox、datePicker、inputNumber、select、switch、timePicker、timeSelect、upload、slider、component` |
| formItem   | 表单formItem组件相关参数             |
| control    | 对应type类型的组件所有参数              |
| modelValue | 当前组件值                        |
| isHide     | 为true时隐藏当前项                  |
| component  | import的组件，仅在`type=component`时|

## Form Methods

| 方法名      | 说明      |
|----------|---------|
| setValue | 批量设置初始值 |
