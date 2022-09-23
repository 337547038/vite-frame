# 合并雪碧图
通用运行node sprites.js可将多张小图合并，并生成对应的样式。

使用前需要先配置好：
```javascript
const SPRITESPATH = './src/assets/sprites' // 图片路径
const SAVEPATH = './src/assets/img' // 合并后图片保存位置
const IMGWIDTH = 500 // 合并生成的图片宽度
const SPACEING = 5 // 两张图片间的间距
const CSSPATH = './src/sprites' // 生成css的文件保存路径
const PREFIX = 'icon-' // 生成css类名前缀
```

