<template>
  <div class="form-tabs-content">
    <div class="control-btn">
      <div class="label">位置</div>
      <a-button type="primary">
        <plus-outlined />
        添加位置
      </a-button>
      <a-button class="btn-copy">
        <copy-outlined />
        复制位置
      </a-button>
      <a-button type="primary" danger>
        <delete-outlined />
        删除位置
      </a-button>
    </div>
    <a-tabs v-model:activeKey="activeKey" tab-position="left">
      <a-tab-pane key="1" tab="主卧室">
        <div class="box">
          <div class="title">基本信息：</div>
          <div class="content-table">
            <table>
              <tr>
                <th>特殊结构：</th>
                <td style="padding-left: 10px">
                  <a-checkbox-group :options="plainOptions" />
                </td>
                <th>表单属性1：</th>
                <td>
                  <a-input placeholder="请输入订单金额" />
                </td>
              </tr>
              <tr>
                <th>位置：</th>
                <td>
                  <a-input placeholder="请输入订单金额" />
                </td>
                <th>表单属性1：</th>
                <td>
                  <a-input placeholder="请输入订单金额" />
                </td>
              </tr>
              <tr>
                <th>实收金额：</th>
                <td>
                  <a-input placeholder="请输入订单金额" />
                </td>
                <th>表单属性1：</th>
                <td>
                  <a-input placeholder="请输入订单金额" />
                </td>
              </tr>
              <tr>
                <th>是否为特殊窗型：</th>
                <td colspan="4" style="padding: 10px">
                  <a-checkbox>上传尺寸图</a-checkbox>
                  <a-image
                    :width="60"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="box box-flex">
          <div class="label">一级结构：</div>
          <div class="item active">窗帘主体(1)</div>
          <div class="item">抽带(1)</div>
          <div class="item">自定义选项(1)</div>
          <div class="item">帘头(1)</div>
        </div>
        <div class="box box-flex">
          <div class="label">二级结构：</div>
          <a-button size="small">帘身布双层(0)</a-button>
          <a-button size="small">自定义大类结构(0)</a-button>
          <a-button size="small">帘身布双层(0)</a-button>
        </div>
        <div class="box">
          <div class="form-head">
            <delete-outlined class="icon" />
            <span class="label">帘身布双层</span>
            <a-button size="small"><plus-outlined />帘身布双层(0)</a-button>
            <div class="unit">长<a-input size="small" /></div>
            <div class="unit">宽<a-input size="small" /></div>
            <div class="unit">高<a-input size="small" /></div>
            <div class="unit">数量<a-input size="small" /></div>
          </div>
          <div class="form">
            <a-form-item label="安装附加：">
              <a-input placeholder="请输入订单编号" />
            </a-form-item>
            <a-form-item label="安装方式：">
              <a-input placeholder="请输入订单编号" />
            </a-form-item>
            <a-form-item label="帘身款式：">
              <a-input placeholder="请输入订单编号" />
            </a-form-item>
            <a-form-item label="审工艺备注：">
              <a-textarea />
            </a-form-item>
          </div>
          <div class="table">
            <a-table :dataSource="dataSource" :columns="columns" />
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="次卧室">1</a-tab-pane>
      <a-tab-pane key="2" tab="客厅左窗">1</a-tab-pane>
      <a-tab-pane key="3" tab="客厅右窗">1</a-tab-pane>
      <a-tab-pane key="4" tab="阳台窗">1</a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const activeKey = ref('1')
  const plainOptions = ref([
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ])
  const columns = ref([
    {
      title: '操作',
      dataIndex: 'a1',
      key: 'a1'
    },
    {
      title: '产品结构组成项',
      dataIndex: 'a2',
      key: 'a2'
    },
    {
      title: '物料编号',
      dataIndex: 'a3',
      key: 'a3'
    },
    {
      title: '物料名称',
      dataIndex: 'a4',
      key: 'a4'
    },
    {
      title: '规格型号',
      dataIndex: 'a5',
      key: 'a5'
    },
    {
      title: '实售价',
      dataIndex: 'a6',
      key: 'a6'
    },
    {
      title: '是否余斜',
      dataIndex: 'a7',
      key: 'a7'
    },
    {
      title: '用料',
      dataIndex: 'a8',
      key: 'a8'
    },
    {
      title: '单位',
      dataIndex: 'a9',
      key: 'a9'
    },
    {
      title: '工艺备注',
      dataIndex: 'a10',
      key: 'a10'
    },
    {
      title: '花距',
      dataIndex: 'a11',
      key: 'a11'
    },
    {
      title: '幅数',
      dataIndex: 'a12',
      key: 'a12'
    },
    {
      title: '对花',
      dataIndex: 'a13',
      key: 'a13'
    },
    {
      title: '缩水',
      dataIndex: 'a14',
      key: 'a14'
    },
    {
      title: '审料',
      dataIndex: 'a15',
      key: 'a15'
    },
    {
      title: '审料备注',
      dataIndex: 'a16',
      key: 'a16'
    }
  ])
  const dataSource = ref([{ a1: '', a2: '', a3: 'Ml20200821004' }])
</script>
<style lang="scss">
  .form-tabs-content {
    .ant-tabs-nav {
      width: 110px;
    }
    .ant-tabs-tab {
      padding: 8px 0 !important;
    }
    .ant-tabs-content-holder {
      background: #ebeced;
      padding: 16px;
    }
    .ant-tabs-tabpane {
      padding: 0 !important;
    }
    .control-btn {
      display: flex;
      padding: 0 40px 16px;
      border-bottom: 1px solid #ddd;
      .label {
        font-size: 18px;
        margin-right: 10px;
      }
      .btn-copy {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
      }
      button {
        margin: 0 10px;
      }
    }
    .box {
      background: #fff;
      margin-bottom: 20px;
      border-radius: 3px;
      .title {
        height: 40px !important;
        line-height: 40px !important;
      }
      .content {
        padding: 0 !important;
      }
    }
    .content-table {
      padding: 0 20px 20px;
      .ant-input {
        border: none;
      }
      table {
        width: 100%;
        border: 1px solid #ddd;
        th {
          background: #f8f8f8;
          height: 36px;
          padding: 0 10px;
          text-align: left;
          font-weight: 400;
          width: 160px;
          border: 1px solid #ddd;
        }
        td {
          border: 1px solid #ddd;
        }
      }
    }
    .box-flex {
      display: flex;
      align-items: center;
      padding: 10px 20px;
      .label {
        font-weight: 700;
      }
      .item,
      .ant-btn {
        margin: 0 10px;
      }
      .item {
        position: relative;
        &.active {
          &:after {
            content: '';
            width: 60%;
            height: 3px;
            background: #1890ff;
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
    .form-head {
      border-bottom: 1px solid #ddd;
      background: #fafafa;
      display: flex;
      align-items: center;
      height: 50px;
      padding: 0 20px;
      .label {
        font-size: 14px;
        font-weight: 700;
        margin: 0 30px 0 10px;
      }
      .icon {
        color: #ff4d4f;
      }
      .ant-btn {
        margin-right: 30px;
        .anticon {
          color: #1890ff;
        }
      }
      .unit {
        width: 110px;
        display: flex;
        flex-wrap: nowrap;
        white-space: nowrap;
        margin-right: 10px;
        input {
          margin-left: 5px;
        }
      }
    }
    .form {
      padding: 0 20px;
      display: flex;
      flex-wrap: wrap;
      > div {
        width: 33%;
      }
      .ant-form-item-label {
        width: 100px;
      }
    }
  }
</style>
