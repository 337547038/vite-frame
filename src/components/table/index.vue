<template>
  <div class="table-comm">
    <div class="search-box" v-if="searchData?.length > 0">
      <SearchForm :data="searchData" @submit="submit" />
    </div>
    <el-table :stripe="true" :data="tableData" v-bind="tableProps">
      <template v-for="(item, index) in columns" :key="index">
        <el-table-column v-bind="item">
          <template #header="scope" v-if="item.help">
            {{ scope.column.label }}
            <el-tooltip placement="top">
              <template #content>
                <span v-html="item.help"></span>
              </template>
              <i class="icon-help"></i>
            </el-tooltip>
          </template>
          <template #default="scope" v-if="$slots[item.prop]">
            <slot :name="item.prop" :row="scope.row" :$index="scope.$index">
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      v-model:currentPage="state.currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="state.pageSize"
      layout="sizes, prev, pager, next, jumper"
      :total="state.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
  import { reactive, onMounted, ref } from 'vue'
  import SearchForm from '@/components/form/index.vue'
  import { getRequest } from '../../api'

  const props = withDefaults(
    defineProps<{
      tableProps?: Object // 表格相关参数
      columns?: Object
      searchData?: Object
      api?: string
      tableList?: any // 当api为空时，表格数据将使用参数传进来的
      beforeRequest?: Function // 请求列表数据之前
      afterResponse?: Function // 请求到列表数据处理后返回表格列表所需数据
    }>(),
    {
      tableList: () => []
    }
  )
  const emits = defineEmits<{
    (e: 'submit', obj: any): void
    (e: 'sizeChange', page: number): void
    (e: 'currentChange', page: number): void
  }>()
  const tableData = ref([])
  const state = reactive<any>({
    currentPage: 1,
    total: 10,
    pageSize: 10
  })
  const getData = (obj?: any) => {
    const prams = {} // 一些初始参数
    let beforePrams = {}
    // 请求前将参数合并
    if (props.beforeRequest && typeof props.beforeRequest === 'function') {
      beforePrams = props.beforeRequest() || {}
    }
    // 获取数据
    if (props.api) {
      getRequest(props.api, Object.assign(prams, obj || {}, beforePrams))
        .then((res: any) => {
          if (typeof props.afterResponse === 'function') {
            tableData.value = props.afterResponse(res)
          } else {
            tableData.value = res.list
          }
        })
        .catch(() => {
          // 全局异常处理
        })
    } else {
      tableData.value = props.tableList
    }
  }
  const handleSizeChange = (page: number) => {
    state.currentPage = page
    emits('sizeChange', page)
    getData()
  }
  const handleCurrentChange = (page: number) => {
    state.pageSize = page
    emits('currentChange', page)
    getData()
  }
  // 搜索表单事件
  const submit = (obj: any) => {
    console.log(obj)
    emits('submit', obj) // 没传api在外部加载数据时，回调事件
    getData(obj)
  }
  onMounted(() => {
    getData()
  })
</script>
