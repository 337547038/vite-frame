# Vue 3 + TypeScript + Vite 管理后台框架

基于vue3+TypeScript + Vite的后台项目初始框架，element-plus + ant design两个版本

## 示例

https://337547038.github.io/vite-frame/

## 封装组件

### ak-list组件

el-table二次封装，实现功能：

> ✔1.集成条件搜索<br />
>✔2.集成分页功能<br />
>✔3.集成列表数据接口请求功能<br />
>✔4.时间单元格快速格式化<br />
>✔5.可快速显示tag样式<br />
>✔6.集成数据值字典转换<br />
>✔7.无需重复复制组件el-table-column<br />
>✔8.集成横向滚动条固定在浏览器底部<br />
>✔9.快速设置表头帮助信息<br />

使用：
```vue
<ak-list :columns="columns"></ak-list>
```

[更多参数详见](blob/main/src/components/table/README.md)

### ak-form组件
实现功能：
>✔1.实现联动隐藏显示或禁用启用；<br />
>✔2.实现接口数据初始填充；<br />
>✔3.实现数据提交；<br />
>✔4.实现常见类型快速校验；<br />
>✔5.实现radio等类选项数据动态获取/字典匹配；<br />
>✔6.实现动态联动请求；<br />
>✔7.实现div布局；<br />
 
 使用：
```vue
<ak-form :data="data"></ak-form>
```

[更多参数点这里](blob/main/src/components/form/README.md)

## 说明

本系统使用`vite-plugin-pages`插件自动生成路由

若需使用`tagViews`功能，则需在页面中导出组件名称（`keep-alive`需要使用组件名称），可使用添加`script`方法导出或使用相关插件，同时需将当前路由`name`设置为组件名称，保持一致

```javascript
<script lang="tsx">
  export default {
  name: 'XXXXX'
}
</script>
```

`vite-plugin-pages` 可使用如下方法设置当前路由组件名或设置为不需要缓存，`route`和`script`同级

```html

<route>
  {
  name:'XXXXX',
  meta:{
  keepAlive:false // 为false时不缓存
  }
  }
</route>
```
