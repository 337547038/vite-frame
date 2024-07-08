### Field

| 参数       | 类型     | 说明                                                                                                                                             |
|----------|--------|------------------------------------------------------------------------------------------------------------------------------------------------|
| prop     | string | form-item的prop值                                                                                                                                |
| label    | string | form-item的label值                                                                                                                               |
| formItem | object | el-form-item所有属性，直接绑定于form-item                                                                                                                |
| type     | string | 渲染的组件类型，可选`'input'、'cascader'、'checkbox'、'datePicker'、'inputNumber'、'select'、'switch'、'timePicker'、'timeSelect'、'upload'、'slider'、'component'` |
| options  | object | 组件为`'cascader'、'checkbox'、'select'、radio`时的选项数据                                                                                                |
| -        | -      | 当前类型下组件其他所有prop                                                                                                                                |