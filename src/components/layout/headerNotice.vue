<template>
  <a-dropdown :trigger="['click']" v-model="show">
    <template #overlay>
      <a-spin :spinning="loading">
        <a-tabs
          class="dropdown-tabs"
          :tabBarStyle="{ textAlign: 'center' }"
          :style="{ width: '297px' }"
        >
          <a-tab-pane tab="通知" key="1">
            <a-list class="tab-pane">
              <a-list-item>
                <a-list-item-meta
                  title="你收到了 14 份新周报"
                  description="一年前"
                >
                  <template #avatar>
                    <a-avatar
                      style="background-color: white"
                      src="https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png"
                    />
                  </template>
                </a-list-item-meta>
              </a-list-item>
              <a-list-item>
                <a-list-item-meta
                  title="你推荐的 曲妮妮 已通过第三轮面试"
                  description="一年前"
                >
                  <template #avatar>
                    <a-avatar
                      style="background-color: white"
                      src="https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png"
                    />
                  </template>
                </a-list-item-meta>
              </a-list-item>
              <a-list-item>
                <a-list-item-meta
                  title="这种模板可以区分多种通知类型"
                  description="一年前"
                >
                  <template #avatar>
                    <a-avatar
                      style="background-color: white"
                      src="https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png"
                    />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-tab-pane>
          <a-tab-pane tab="消息" key="2">
            <a-list class="tab-pane" />
          </a-tab-pane>
          <a-tab-pane tab="待办" key="3">
            <a-list class="tab-pane" />
          </a-tab-pane>
        </a-tabs>
      </a-spin>
    </template>
    <span @click="fetchNotice" class="header-notice">
      <a-badge class="notice-badge" count="12">
        <bell-outlined class="header-notice-icon" />
      </a-badge>
    </span>
  </a-dropdown>
</template>

<script>
  export default {
    name: 'HeaderNotice',
    data() {
      return {
        loading: false,
        show: false
      }
    },
    computed: {},
    methods: {
      fetchNotice() {
        if (this.loading) {
          this.loading = false
          return
        }
        this.loadding = true
        setTimeout(() => {
          this.loadding = false
        }, 1000)
      }
    }
  }
</script>

<style lang="scss">
  .header-notice {
    display: inline-block;
    transition: all 0.3s;
    span {
      vertical-align: initial;
    }
    .notice-badge {
      cursor: pointer;
      color: inherit;
      .header-notice-icon {
        font-size: 16px;
        padding: 4px;
      }
    }
  }
  .dropdown-tabs {
    background-color: #fff;
    box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
    border-radius: 4px;
    .tab-pane {
      padding: 0 24px 12px;
      min-height: 250px;
    }
    .ant-tabs-nav-list {
      justify-content: space-between;
      width: 100%;
    }
  }
</style>
