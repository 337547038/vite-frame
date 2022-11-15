<template>
  <div class="demo-box">
    <h2>ak-form-list</h2>
    <p
      >二次封装表格列表及表单两个组件以满足方便使用，享受更多摸鱼时间。主要实现功能：
    </p>
    <div class="box">
      <h3>使用方法：</h3>
      <p>1.直接引入组件，方便快捷，扩展灵活</p>
      <p>2.使用build:lib命令打包成库或传npm</p>
    </div>
    <div class="flex">
      <div class="col">
        <h3>ak-list</h3>
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
        <div>
          <el-button @click="$router.push('/list')" type="primary"
            >查看示例
          </el-button>
        </div>
      </div>
      <div class="col">
        <h3>ak-form</h3>
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
        <div>
          <el-button @click="$router.push('/form')" type="primary"
            >查看示例
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
<style scoped>
  div,
  h3,
  p {
    margin: 0;
    padding: 0;
  }

  h3 {
    font-size: 16px;
  }

  .demo-box {
    background: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    line-height: 28px;
  }

  .flex {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
  }

  .box {
    padding: 20px 0;
  }

  .col {
    border: 1px solid #eee;
    padding: 10px;
    border-radius: 5px;
    margin: 0 5px 10px;
    max-width: 420px;
  }
</style>
