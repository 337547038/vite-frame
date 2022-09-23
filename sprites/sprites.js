const fs = require('fs')
const { createCanvas, Image } = require('canvas')

const SPRITESPATH = './img' // 图片路径
const SAVEPATH = '.' // 合并后图片保存位置
const IMGWIDTH = 500 // 合并生成的图片宽度
const SPACEING = 5 // 两张图片间的间距
const CSSPATH = '.' // 生成css的文件保存路径
const PREFIX = 'icon-' // 生成css类名前缀

const sprites = () => {
  fs.readdir(SPRITESPATH, (err, paths) => {
    if (err) {
      throw err
    }
    const tempArray = []
    let index = paths.length
    paths.forEach((src) => {
      if (src.indexOf('.jpg') !== -1 || src.indexOf('.png') !== -1) {
        const img = new Image()
        img.onload = () => {
          tempArray.push({
            path: src,
            width: img.width,
            height: img.height,
            image: img
          })
          index--
          if (index === 0) {
            writeFile(tempArray)
          }
        }
        img.src = SPRITESPATH + '/' + src // 不支持带有中文名称
      }
    })
    // console.log(tempArray)
    // writeFile(tempArray)
  })
}
const writeFile = (imgArray) => {
  // 对tempArray排序，将高度差不多的放一行，减少行与行的间距1
  imgArray.sort((a, b) => {
    if (a.height < b.height) {
      return -1
    }
    if (a.height > b.height) {
      return 1
    }
    return 0
  })
  let usedWidth = 0 // 当前列已使用宽度，换行时要回0
  let usedHeight = 0 // 当前使用高度
  let maxHeight = 0 // 当前行最大高度，换行时要回0
  imgArray.forEach((item) => {
    // 计算每张图片的坐标位置点
    if (item.width + usedWidth + SPACEING > IMGWIDTH) {
      // 要换行
      usedHeight += maxHeight + SPACEING
      usedWidth = 0
      maxHeight = 0
      // 如果xy没有时才重写
      item.x = item.x || 0
    } else {
      item.x = item.x || usedWidth
    }
    if (item.height > maxHeight) {
      maxHeight = item.height
    }
    item.y = item.y || usedHeight
    usedWidth += item.width + SPACEING
  })
  const canvasHeight = usedHeight + maxHeight // 生成图片的高度
  // 将图片输出
  const canvas = createCanvas(IMGWIDTH, canvasHeight)
  const ctx = canvas.getContext('2d')
  drawImage(imgArray, ctx, canvas)
}
const drawImage = (imageList, ctx, canvas) => {
  let cssTemp = `[class*="${PREFIX}"]:before{content:"";background-image: url(${SAVEPATH}/sprites.png); display: inline-block;vertical-align: middle;}\n`
  imageList.forEach((item) => {
    ctx.drawImage(item.image, item.x, item.y, item.width, item.height)
    const clsName = item.path.substring(0, item.path.indexOf('.'))
    const x = item.x ? `-${item.x}px` : 0
    const y = item.y ? `-${item.y}px` : 0
    cssTemp += `.${
      PREFIX + clsName
    }:before{background-position: ${x} ${y};width: ${item.width}px;height: ${
      item.height
    }px}\n`
  })
  // 生成css文件
  fs.writeFile(`${CSSPATH}/sprites.scss`, cssTemp, function (err) {
    if (err) throw err
    // 绿色
    console.log(`成功写入${CSSPATH}/sprites.scss文件`)
  })
  // 生成图片文件
  const pngName = SAVEPATH + '/sprites.png'
  const out = fs.createWriteStream(pngName)
  const stream = canvas.createPNGStream()
  // 输出目录不存在时，先创建
  if (!fs.existsSync(SAVEPATH)) {
    fs.mkdirSync(SAVEPATH)
  }
  stream.pipe(out)
  out.on('finish', () => console.log(`成功合并图片并保存在${pngName}`))
}
sprites()
// module.exports = sprites
