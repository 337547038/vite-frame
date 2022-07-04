<template>
  <div class="new-form-style">
    <div class="tips-text">
      <h1>复杂表单</h1>
      <p>复杂表单常见一次性输入和提交大批量数据的场景。</p>
    </div>
    <div class="form">
      <a-form :model="formState" name="basic" autocomplete="off">
        <div class="form-box">
          <div class="title">订单状态</div>
          <div class="content">
            <a-form-item
              label="订单编号"
              name="username"
              :rules="[
                { required: true, message: 'Please input your username!' }
              ]"
            >
              <a-input v-model:value="formState.username" />
            </a-form-item>
            <a-form-item label="订单编号" name="username">
              <a-input />
            </a-form-item>
            <a-form-item
              name="select"
              label="Select"
              has-feedback
              :rules="[
                { required: true, message: 'Please select your country!' }
              ]"
            >
              <a-select
                v-model:value="formState.select"
                placeholder="Please select a country"
              >
                <a-select-option value="china">China</a-select-option>
                <a-select-option value="usa">U.S.A</a-select-option>
              </a-select>
            </a-form-item>
          </div>
        </div>
        <div class="form-box">
          <div class="title">订单状态</div>
          <div class="content">
            <a-form-item
              label="订单编号"
              name="username"
              :rules="[
                { required: true, message: 'Please input your username!' }
              ]"
            >
              <a-input v-model:value="formState.username" />
            </a-form-item>
            <a-form-item label="订单编号" name="username">
              <a-input />
            </a-form-item>
            <a-form-item
              name="select"
              label="Select"
              has-feedback
              :rules="[
                { required: true, message: 'Please select your country!' }
              ]"
            >
              <a-select
                v-model:value="formState.select"
                placeholder="Please select a country"
              >
                <a-select-option value="china">China</a-select-option>
                <a-select-option value="usa">U.S.A</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="备注信息">
              <a-textarea />
            </a-form-item>
            <a-form-item label="附件">
              <a-upload
                v-model:file-list="fileList"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                list-type="picture-card"
              >
                <div v-if="fileList.length < 8">
                  <plus-outlined />
                  <div style="margin-top: 8px">Upload</div>
                </div>
              </a-upload>
              <!--              <a-modal :visible="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
                <img alt="example" style="width: 100%" :src="previewImage" />
              </a-modal>-->
            </a-form-item>
          </div>
        </div>
        <div class="form-box">
          <div class="title">客户信息</div>
          <div class="content">
            <a-form-item label="订单编号" name="username">
              <a-input />
            </a-form-item>
          </div>
        </div>
        <div class="form-box">
          <a-tabs v-model:activeKey="activeKey" class="tabs-1">
            <a-tab-pane key="1">
              <template #tab>
                <a-badge count="25" :offset="[15, 0]">窗帘</a-badge>
              </template>
              <TabsContent />
            </a-tab-pane>
            <a-tab-pane key="2" tab="软包" force-render
              ><TabsContent />
            </a-tab-pane>
            <a-tab-pane key="3" tab="沙发套/垫/枕"><TabsContent /> </a-tab-pane>
            <a-tab-pane key="4" tab="墙纸/布"><TabsContent /> </a-tab-pane>
            <template #rightExtra>
              <div class="right-text">
                <div>数量总计：<span class="blue">12</span>项</div>
                <div>订单总额：<span class="red">¥8200.00</span></div>
              </div>
            </template>
          </a-tabs>
        </div>
        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import TabsContent from './components/tabsContent.vue'

  const formState = ref({})
  const fileList = ref([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ])
  const activeKey = ref('1')
</script>
<style lang="scss">
  .new-form-style {
    .tips-text {
      margin-right: -15px;
      margin-left: -15px;
      background: #fff;
      margin-top: -15px;
      color: #999;
      padding: 25px 25px 15px;
    }
    .form {
      padding-top: 20px;
    }
    .form-box {
      overflow: hidden;
      background: #fff;
      border-radius: 5px;
      margin-bottom: 15px;
      .title {
        border-bottom: 1px solid #ddd;
        padding: 0 20px;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        margin-bottom: 20px;
      }
      .content {
        display: flex;
        flex-wrap: wrap;
        padding-right: 20px;
        > div {
          width: 33%;
        }
        .ant-form-item-label {
          width: 120px;
        }
      }
    }
    .tabs-1 {
      .ant-tabs-nav-list {
        .ant-tabs-tab {
          margin: 0 25px;
        }
      }
      .right-text {
        display: flex;
        padding-right: 35px;
        font-size: 16px;
        .blue {
          color: #1890ff;
        }
        .red {
          color: #ff4d4f;
        }
        > div {
          margin-left: 20px;
        }
      }
    }
  }
</style>
