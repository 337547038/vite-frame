<template>
  <div ref="el" class="table-comm">
    <div v-if="searchData?.length" class="search-box">
      <SearchForm
        ref="formEl"
        :data="mergeSearchData"
        :formProps="mergeFormProps"
      />
    </div>
    <slot name="afterSearch"></slot>
    <div v-if="controlBtn.length" class="btn-group">
      <el-button
        v-bind="item"
        v-for="(item, index) in controlBtn"
        :key="index"
        @click="controlBtnClick(item)"
      >
        {{ item.label }}
      </el-button>
    </div>
    <slot name="beforeTable"></slot>
    <el-table v-bind="tableProps" ref="table" :data="tableData" :stripe="true">
      <template v-for="(item, index) in columns" :key="index">
        <el-table-column v-bind="item">
          <template v-if="item.help" #header="scope">
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
          <template v-if="$slots[item.prop]" #default="scope">
            <slot
              :index="scope.$index"
              :name="item.prop"
              :row="scope.row"
            ></slot>
            <el-popconfirm
              v-if="showDelBtn && item.prop === 'control'"
              cancel-button-text="取消"
              confirm-button-text="确定"
              title="确定删除访记录吗？"
              @confirm="delClick(scope.row)"
            >
              <template #reference>
                <el-button type="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
          <template v-else-if="item.formatTime" #default="scope">
            {{
              dateFormatting(
                scope.row[item.prop],
                item.formatTime
                  .replace('dateTime', '')
                  .replace('date', '{y}-{m}-{d}')
              )
            }}
          </template>
          <template v-else-if="item.tag" #default="scope">
            <el-tag
              v-if="
                scope.row[item.prop] !== '' &&
                scope.row[item.prop] !== undefined
              "
              :type="item.tag[scope.row[item.prop]]"
              >{{ getDictName(scope.row, item) }}
            </el-tag>
            <span v-else-if="item.placeholder" v-text="item.placeholder"></span>
          </template>
          <template v-else-if="item.dict || item.placeholder" #default="scope">
            {{ getDictName(scope.row, item) }}
          </template>
        </el-table-column>
      </template>
    </el-table>
    <slot name="afterTable"></slot>
    <div
      v-if="
        showPage === true ||
        (typeof showPage === 'object' && Object.keys(showPage).length)
      "
      class="page"
    >
      <el-pagination
        v-bind="pageInfo"
        v-model:currentPage="state.currentPage"
        :page-size="state.pageSize"
        :page-sizes="[10, 20, 30, 40] as any"
        :total="state.total"
        layout="sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <div v-if="tableScrollMargin" :style="{ height: tableScrollMargin }"></div>
  </div>
</template>

<script lang="ts" setup>
  import {
    reactive,
    onMounted,
    ref,
    computed,
    nextTick,
    onBeforeUnmount,
    watch
  } from 'vue'
  import SearchForm from '../form/index.vue'
  import { getRequest } from '@/api'
  import { dateFormatting } from '@/utils'
  import type { FormData } from '../types'
  import { useRouter, useRoute } from 'vue-router'
  import { ElMessage } from 'element-plus'

  const props = withDefaults(
    defineProps<{
      tableProps?: object // 表格相关参数
      columns: object
      searchData?: FormData[]
      apiKey?: string
      apiDelKey?: string
      beforeRequest?: Function // 请求列表数据之前
      afterResponse?: Function // 请求到列表数据处理后返回表格列表所需数据
      showPage?: object | boolean
      fixedBottomScroll?: boolean | string
      dict?: object
      formProps?: any // el表单组件props参数
      controlBtn?: any // 控制按钮
      searchJump?: boolean // 筛选搜索是否跳转
      showDelBtn?: boolean // 表格操作栏显示删除，约定操作栏prop=control
    }>(),
    {
      tableList: () => [],
      showPage: true,
      fixedBottomScroll: true, // 当前框架滚动区域
      controlBtn: () => {
        return []
      },
      searchData: () => {
        return []
      },
      showDelBtn: true
    }
  )
  const emits = defineEmits<{
    (e: 'controlBtnClick', obj: any): void
  }>()
  const router = useRouter()
  const route = useRoute()
  const el = ref()
  const formEl = ref()
  const table = ref()
  // 监听路由参数发生变化时，重新请求数据
  watch(
    () => route.query,
    () => {
      state.currentPage = 1
      getRouteQueryGetData()
    },
    { deep: true }
  )
  const mergeFormProps = computed(() => {
    return Object.assign({ inline: true }, props.formProps || {})
  })
  /**
   * 默认下添加查询按钮*/
  const mergeSearchData = computed(() => {
    const btn = [
      {
        type: 'button',
        list: [
          {
            type: 'primary',
            label: '查询',
            click: (formValue: any) => {
              submit(formValue)
            }
          },
          {
            type: '',
            label: '清空',
            key: 'cancel',
            click: (formValue: any) => {
              submit(formValue)
            }
          }
        ]
      }
    ]
    return props.searchData.concat(btn)
  })
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

  /**
   * 获取路由参数，当该参数存在于搜索表单时，则作为请求的参数
   */
  const getRouteQueryGetData = () => {
    const routeQuery = route.query
    if (Object.keys(routeQuery).length) {
      formEl.value.setValue(routeQuery)
    }
    getData()
  }
  const getData = (obj?: any) => {
    const searchValue = formEl.value.getValue()
    let beforePrams = Object.assign({}, obj || {}, searchValue || {}, {
      pageInfo: { currentPage: state.currentPage, pageSize: state.pageSize }
    }) // 一些初始参数
    // 请求前将参数合并
    if (typeof props.beforeRequest === 'function') {
      beforePrams = props.beforeRequest(beforePrams, route) ?? beforePrams
    }
    if (beforePrams === false) {
      // 返回false时取消请求
      return
    }
    // 获取数据
    if (props.apiKey) {
      getRequest(props.apiKey, beforePrams)
        .then((res: any) => {
          let result = res.data
          if (typeof props.afterResponse === 'function') {
            result = props.afterResponse(result) ?? result
          }
          tableData.value = result.list
          if (result.dict) {
            // 合并接口返回的dict
            state.dict = Object.assign({}, props.dict || {}, result.dict)
            formEl.value.setOptions(state.dict) // 搜索表单也使用同样的dict
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
    state.currentPage = 1
    if (props.searchJump) {
      // 带参数跳转
      const params = Object.assign({}, route.query, obj || {})
      router.push({ path: route.path, query: params })
    } else {
      getData(obj || {})
    }
  }
  // 匹配字典
  const getDictName = (row: any, item: any) => {
    const val = row[item.prop]
    if (item.placeholder && val === '') {
      return item.placeholder
    }
    if (item.dict) {
      if (typeof item.dict === 'string') {
        // 从全局dict里取
        return state.dict[item.dict]?.[val]
      } else {
        return item.dict[val]
      }
    } else {
      return val
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
          const wrapHeight = Math.min(
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
  const scrollBox = computed(() => {
    const scroll =
      typeof props.fixedBottomScroll === 'string'
        ? props.fixedBottomScroll
        : '.common-main'
    const box = document.querySelector(scroll)
    return box ? box : document
  })
  const controlBtnClick = (obj: any) => {
    if (obj.key === 'del') {
      // 约定的删除事件
      const selectRow = table.value.getSelectionRows()
      if (selectRow?.length) {
        const ids = selectRow.map(obj => obj.id)
        delClick({}, ids)
      } else {
        ElMessage({
          message: '请勾选需要删除的选项',
          type: 'error'
        })
      }
      //console.log('selectRow', selectRow)
    }
    emits('controlBtnClick', obj, table)
  }
  // 通用删除处理
  const delClick = (row: any, idList?: string[]) => {
    let params = {}
    if (idList && idList.length) {
      // 批量删除
      params = { idList: idList }
    } else {
      params = { id: row.id }
    }
    const delKey = props.apiDelKey
    if (delKey) {
      getRequest(delKey, params)
        .then((res: any) => {
          ElMessage({
            message: res.msg || '删除成功',
            type: 'success'
          })
        })
        .catch((res: any) => {
          ElMessage({
            message: res.msg || '删除失败',
            type: 'error'
          })
        })
    }
  }
  onMounted(() => {
    getRouteQueryGetData()
    if (props.fixedBottomScroll) {
      // 目前架构的滚动区域为common-main，不是document
      // document.addEventListener('scroll', fixedBottomScroll)
      nextTick(() => {
        scrollBox.value.addEventListener('scroll', fixedBottomScroll)
        window.addEventListener('resize', fixedBottomScroll)
      })
    }
  })
  onBeforeUnmount(() => {
    if (props.fixedBottomScroll) {
      scrollBox.value.removeEventListener('scroll', fixedBottomScroll)
      window.removeEventListener('resize', fixedBottomScroll)
    }
  })
  defineExpose({ table, getData, formEl, delClick })
</script>
<style lang="scss">
  .table-comm {
    .page {
      display: flex;
      justify-content: flex-end;
      padding-top: 10px;
    }

    .btn-group {
      margin-bottom: 10px;
    }

    .el-scrollbar__view {
      overflow-x: auto;
      overflow-y: hidden;
    }
  }
</style>
