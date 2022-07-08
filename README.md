# Vue 3 + TypeScript + Vite 管理后台框架

基于vue3+TypeScript + Vite的后台项目初始框架，element-plus + ant design两个版本

## 示例
https://337547038.github.io/vite-frame/

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
