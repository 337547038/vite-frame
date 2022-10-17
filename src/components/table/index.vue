<template>
  <div class="table-comm" ref="el">
    <div class="search-box" v-if="searchData?.length > 0">
      <SearchForm v-bind="formConfig" :data="searchData" @submit="submit" />
    </div>
    <slot name="beforeTable"></slot>
    <el-table :stripe="true" v-bind="tableProps" :data="tableData">
      <template v-for="(item, index) in columns" :key="index">
        <el-table-column v-bind="item">
          <template #header="scope" v-if="item.help">
            {{ scope.column.label }}
            <el-tooltip placement="top">
              <template #content>
                <span v-html="item.help"></span>
              </template>
              <el-icon>
                <InfoFilled />
              </el-icon>
            </el-tooltip>
          </template>
          <template #default="scope" v-if="$slots[item.prop]">
            <slot
              :name="item.prop"
              :row="scope.row"
              :$index="scope.$index"
            ></slot>
          </template>
          <template #default="scope" v-else-if="item.formatTime">
            {{
              dateFormatting(
                scope.row[item.prop],
                item.formatTime
                  .replace('dateTime', '')
                  .replace('date', '{y}-{m}-{d}')
              )
            }}
          </template>
          <template #default="scope" v-else-if="item.tag">
            <el-tag
              :type="item.tag[scope.row[item.prop]]"
              v-if="scope.row[item.prop] !== undefined"
              >{{ getDictName(scope.row, item) }}
            </el-tag>
          </template>
          <template #default="scope" v-else-if="item.dict">
            {{ getDictName(scope.row, item) }}
          </template>
        </el-table-column>
      </template>
    </el-table>
    <slot name="afterTable"></slot>
    <div
      class="page"
      v-if="
        showPage === true ||
        (typeof showPage === 'object' && Object.keys(showPage).length)
      "
    >
      <el-pagination
        layout="sizes, prev, pager, next, jumper"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="state.pageSize"
        v-bind="pageInfo"
        v-model:currentPage="state.currentPage"
        :total="state.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <div :style="{ height: tableScrollMargin }" v-if="tableScrollMargin"></div>
  </div>
</template>

<script lang="ts" setup>
  import {
    reactive,
    onMounted,
    ref,
    computed,
    nextTick,
    onBeforeUnmount
  } from 'vue'
  import SearchForm from '@/components/form/index.vue'
  import { getRequest } from '@/api'
  import { dateFormatting } from '@/utils'

  const props = withDefaults(
    defineProps<{
      tableProps?: object // 表格相关参数
      columns: object
      searchData?: object
      apiKey?: string
      beforeRequest?: Function // 请求列表数据之前
      afterResponse?: Function // 请求到列表数据处理后返回表格列表所需数据
      showPage?: object | boolean
      fixedBottomScroll?: boolean | string
      dict?: object
      formConfig?: object
    }>(),
    {
      tableList: () => [],
      showPage: true
      // fixedBottomScroll: '.common-main' // 当前框架滚动区域
    }
  )
  /*  const emits = defineEmits<{
    (e: 'submit', obj: any): void
    (e: 'sizeChange', page: number): void
    (e: 'currentChange', page: number): void
  }>()*/
  const el = ref()
  const pageInfo = computed(() => {
    if (typeof props.showPage === 'object') {
      return props.showPage
    }
    return {}
  })
  const tableData = ref([])
  const state = reactive<any>({
    currentPage: 1,
    total: 0,
    pageSize: 10,
    dict: Object.assign({}, props.dict || {})
  })
  const getData = (obj?: any) => {
    let beforePrams = Object.assign({}, obj || {}, {
      pageInfo: { currentPage: state.currentPage, pageSize: state.pageSize }
    }) // 一些初始参数
    // 请求前将参数合并
    if (typeof props.beforeRequest === 'function') {
      beforePrams = props.beforeRequest(beforePrams)
    }
    if (beforePrams === false) {
      // 返回false时取消请求
      return
    }
    // 获取数据
    if (props.apiKey) {
      getRequest(props.apiKey, beforePrams)
        .then((res: any) => {
          if (typeof props.afterResponse === 'function') {
            tableData.value = props.afterResponse(res.data)
          } else {
            tableData.value = res.data.list
          }
          if (res.data.dict) {
            // 合并接口返回的dict
            state.dict = Object.assign({}, props.dict || {}, res.data.dict)
          }
          fixedBottomScroll()
        })
        .catch(() => {
          // 全局异常处理
        })
    }
  }
  const handleSizeChange = (page: number) => {
    state.pageSize = page
    state.currentPage = 1
    getData()
  }
  const handleCurrentChange = (page: number) => {
    state.currentPage = page
    getData()
  }
  // 搜索表单事件
  const submit = (obj: any) => {
    console.log(obj)
    state.currentPage = 1
    getData(obj)
  }
  // 匹配字典
  const getDictName = (row: any, item: any) => {
    if (item.dict) {
      if (typeof item.dict === 'string') {
        // 从全局dict里取
        return state.dict[item.dict]?.[row[item.prop]]
      } else {
        return item.dict[row[item.prop]]
      }
    } else {
      return row[item.prop]
    }
  }
  const tableScrollMargin = ref('')
  const fixedBottomScroll = () => {
    if (props.fixedBottomScroll) {
      nextTick(() => {
        const tableEl = el.value
        const tableBodyWrapDom = tableEl.querySelector('.el-scrollbar__view') // table父一级
        const tableBodyDom = tableEl.querySelector('.el-table__body') // table
        const { top: tableBodyDomTop } =
          tableBodyWrapDom.getBoundingClientRect()
        // console.log(tableBodyWrapDom.classList)
        if (
          tableBodyDomTop > window.innerHeight ||
          tableBodyWrapDom.classList.contains('is-scrolling-none')
        ) {
          // 此时列表在可视窗口的下侧不可见区域，因此不做任何修改
          tableBodyWrapDom.style.height = 'unset'
          tableBodyWrapDom.style.marginBottom = 'unset'
        } else {
          /*console.log('window.innerHeight:' + window.innerHeight)
          console.log('tableBodyDomTop:' + tableBodyDomTop)
          console.log('tableBodyDom.offsetHeight:' + tableBodyDom.offsetHeight)*/
          // 窗口高度 - 列表距顶部值 且 不超过自身实际值
          let wrapHeight = Math.min(
            window.innerHeight - tableBodyDomTop - 10,
            tableBodyDom.offsetHeight
          )
          // console.log(wrapHeight)
          tableBodyWrapDom.style.minHeight = '60px'
          tableBodyWrapDom.style.height = wrapHeight + 10 + 'px'
          // 需要用marginBottom填充，以保持列表原有高度，避免页面的纵向滚动条变化导致页面滚动的不流畅
          // tableBodyWrapDom.style.marginBottom =
          //  tableBodyDom.offsetHeight - wrapHeight + 'px'
          tableScrollMargin.value =
            tableBodyDom.offsetHeight - wrapHeight + 'px'
        }
      })
    }
  }
  onMounted(() => {
    getData()
    if (props.fixedBottomScroll) {
      // 目前架构的滚动区域为common-main，不是document
      // document.addEventListener('scroll', fixedBottomScroll)
      nextTick(() => {
        const scroll =
          typeof props.fixedBottomScroll === 'string'
            ? props.fixedBottomScroll
            : '.common-main'
        const scrollEl = document.querySelector(scroll)
        if (scrollEl) {
          scrollEl.addEventListener('scroll', fixedBottomScroll)
        }
        window.addEventListener('resize', fixedBottomScroll)
      })
    }
  })
  onBeforeUnmount(() => {
    if (props.fixedBottomScroll) {
      const scroll =
        typeof props.fixedBottomScroll === 'string'
          ? props.fixedBottomScroll
          : '.common-main'
      const scrollEl = document.querySelector(scroll)
      if (scrollEl) {
        scrollEl.removeEventListener('scroll', fixedBottomScroll)
      }
      window.removeEventListener('resize', fixedBottomScroll)
    }
  })
</script>
<style lang="scss">
  .table-comm {
    .page {
      display: flex;
      justify-content: flex-end;
      padding-top: 10px;
    }
    .el-scrollbar__view {
      overflow-x: auto;
      overflow-y: hidden;
    }
  }
</style>
