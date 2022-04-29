<template>
  <div class="table-comm">
    <div class="search-box">
      <!--      筛选组件待封装-->
      <el-form :inline="true">
        <slot name="_searchForm"></slot>
      </el-form>
    </div>
    <el-table :stripe="true" :data="state.tableData" v-bind="tableProps">
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
  import { reactive, onMounted } from 'vue'
  import { getRequest } from '../../api'
  const props = withDefaults(
    defineProps<{
      tableProps?: Object // 表格相关参数
      columns?: Object
      search?: Object
      api?: string
      tableList?: any // 当api为空时，表格数据将使用参数传进来的
      beforeRequest?: Function // 请求列表数据之前
      afterResponse?: Function // 请求到列表数据处理后返回表格列表所需数据
    }>(),
    {
      tableList: () => []
    }
  )
  /*const emit = defineEmits<{
    (e: 'change', id: number): void
    (e: 'update', value: string): void
  }>()*/

  const state = reactive<any>({
    tableData: [],
    currentPage: 1,
    total: 10,
    pageSize: 10
  })
  // 当搜索使用slot时，查询可直接使用getData方法，传参进来即可
  const getData = (obj?: any) => {
    const prams = {}
    if (obj) {
      Object.assign(prams, obj)
    }
    // 请求前将参数合并
    if (typeof props.beforeRequest === 'function') {
      Object.assign(prams, props.beforeRequest())
    }
    // 获取数据
    if (props.api) {
      getRequest(props.api, prams)
        .then((res: any) => {
          if (typeof props.afterResponse === 'function') {
            state.tableData = props.afterResponse(res)
          } else {
            state.tableData = res.list
          }
        })
        .catch(() => {})
    } else {
      state.tableData = props.tableList
    }
  }
  const handleSizeChange = () => {}
  const handleCurrentChange = () => {}
  onMounted(() => {
    getData()
  })
</script>
