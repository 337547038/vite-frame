<template>
  <div ref="el" class="table-comm" v-loading="loading">
    <div
      v-if="searchData?.length"
      v-show="toggleSearchVisible"
      class="search-box"
    >
      <SearchForm
        ref="formEl"
        :data="mergeSearchData"
        :formProps="mergeFormProps"
      />
    </div>
    <slot name="afterSearch"></slot>
    <div class="btn-group">
      <div v-if="controlBtn.length" class="btn-group-left">
        <el-button
          v-bind="item"
          v-for="(item, index) in controlBtn"
          :key="index"
          @click="controlBtnClick(item)"
        >
          {{ item.label }}
        </el-button>
      </div>
      <div class="btn-group-right">
        <el-button
          v-if="searchData?.length"
          :title="toggleSearchVisible ? '收起搜索' : '展开搜索'"
          circle
          icon="Search"
          @click="toggleSearch"
        />
        <el-popover
          v-if="columnsSetting"
          :width="80"
          placement="bottom-end"
          trigger="click"
          @show="popoverShowClick"
        >
          <template #default>
            <el-checkbox-group v-model="state.columnsCheck">
              <el-checkbox
                v-for="item in columns"
                :key="item.prop || item.type"
                :label="item.prop || item.type"
                >{{ item.label }}
              </el-checkbox>
            </el-checkbox-group>
          </template>
          <template #reference>
            <el-button circle icon="SetUp" title="设置列显示隐藏" />
          </template>
        </el-popover>
      </div>
    </div>
    <slot name="beforeTable"></slot>
    <el-table v-bind="tableProps" ref="table" :data="tableData" :stripe="true">
      <template
        v-for="(item, index) in columnsFilter"
        :key="item.prop || index"
      >
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
              v-if="showDelBtn && item.prop === '__control'"
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
                scope.row?.[item.prop] !== '' &&
                scope.row?.[item.prop] !== undefined
              "
              :type="item.tag[scope.row?.[item.prop]]"
              >{{ getDictName(scope.row, item) }}
            </el-tag>
            <span v-else-if="item.placeholder" v-text="item.placeholder"></span>
          </template>
          <template v-else-if="item.dict || item.placeholder" #default="scope">
            {{ getDictName(scope.row, item) }}
          </template>
          <template
            v-else-if="item.imgAttr && Object.keys(item.imgAttr)?.length"
            #default="scope"
          >
            <img :src="scope.row?.[item.prop]" alt="" v-bind="item.imgAttr" />
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
        v-if="state.total > state.pageSize"
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
      requestUrl?: string
      delUrl?: string
      beforeRequest?: Function // 请求列表数据之前
      afterResponse?: Function // 请求到列表数据处理后返回表格列表所需数据
      showPage?: object | boolean
      fixedBottomScroll?: boolean | string
      dict?: object
      formProps?: any // el表单组件props参数
      controlBtn?: any // 控制按钮
      searchJump?: boolean // 筛选搜索是否跳转
      showDelBtn?: boolean // 表格操作栏显示删除，约定操作栏prop=__control
      columnsSetting?: boolean // 显示列表字段设置
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
      showDelBtn: true,
      columnsSetting: true
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
  const loading = ref(false)
  const toggleSearchVisible = ref(false)
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
    dict: Object.assign({}, props.dict || {}),
    columnsCheck: []
  })
  const columnsFilter = computed(() => {
    if (!state.columnsCheck.length) {
      return props.columns
    } else {
      return props.columns.filter((item: any) => {
        return state.columnsCheck.includes(item.prop || item.type)
      })
    }
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
    const searchValue = formEl.value?.getValue()
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
    loading.value = true
    // 获取数据
    if (props.requestUrl) {
      getRequest(props.requestUrl, beforePrams)
        .then((res: any) => {
          let result = res
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
          loading.value = false
        })
        .catch(() => {
          // 全局异常处理
          loading.value = false
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
      const selectRow = getSelectionRows('请勾选需要删除的选项')
      if (selectRow?.length) {
        const ids = selectRow.map(obj => obj.id)
        delClick({}, ids)
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
    const delKey = props.delUrl
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
  // 收起展开搜索
  const toggleSearch = () => {
    toggleSearchVisible.value = !toggleSearchVisible.value
  }
  /**
   * 获取所勾选的表格，
   * @param message 没有勾选时的提示语
   */
  const getSelectionRows = (message: string) => {
    const selectRow = table.value.getSelectionRows()
    if (selectRow?.length) {
      return selectRow
    } else {
      if (message) {
        ElMessage({
          message: message,
          type: 'error'
        })
      }
    }
    return []
  }

  const popoverShowClick = () => {
    if (!state.columnsCheck?.length) {
      // 为空时，则全部勾选上
      props.columns.forEach((item: any) => {
        state.columnsCheck.push(item.prop || item.type)
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
  defineExpose({ table, getData, formEl, delClick, getSelectionRows })
</script>
<style lang="scss">
  .table-comm {
    .page {
      display: flex;
      justify-content: flex-end;
      padding-top: 10px;
    }

    .btn-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    .el-scrollbar__view {
      overflow-x: auto;
      overflow-y: hidden;
    }
  }
</style>
