<template>
  <div>
    <p
      >二次封装表格列表及表单两个组件以满足方便使用，增加愉快摸鱼时间。主要实现功能：
    </p>
    <p
      >表格列表实现功能：<br />
      1.将后端接口常见时间类型快速格式化时间，见Date列；<br />
      2.使用tag标签显示，同时使用dict字典进行数据转换，见Sex和类型列；<br />
      3.使用dict字典进行数据转换，如状态列；<br />
      4.集成条件筛选；<br />
      5.集成分页组件；<br />
      6.集成列表数据接口请求功能；<br />
      7.无需重复复制组件el-table-column；<br />
      8.集成横向滚动条固定在浏览器底部(小屏时鼠标移到表格区域可见滚动条固定于底部)；<br />
      9.快速设置表头帮助信息；<br />
      10.为空时输出自定义值
    </p>
    <div
      ><el-button @click="$router.push('/list')" type="primary"
        >查看示例</el-button
      ></div
    >
    <el-divider />
    <p>
      表单实现功能：<br />
      1.实现联动隐藏显示或禁用启用；<br />
      2.实现接口数据初始填充；<br />
      3.实现数据提交；<br />
      4.实现常见类型快速校验；<br />
      5.实现radio等类选项数据动态获取/字典匹配；<br />
      6.实现动态联动请求；<br />
      7.实现div布局；<br />
      以上功能仅需一段json代码，无需重复的el-form-item,el-input..等等
    </p>
    <div
      ><el-button @click="$router.push('/form')" type="primary"
        >查看示例</el-button
      ></div
    >
  </div>
</template>

<script lang="ts" setup>
  /*import { useRouter } from 'vue-router'
  import { onMounted, nextTick } from 'vue'
  const router = useRouter()
  onMounted(() => {
    nextTick(() => {
      // router.push({ path: '/form' })
    })
  })*/
</script>
<style scoped>
  div {
    line-height: 28px;
  }
</style>
