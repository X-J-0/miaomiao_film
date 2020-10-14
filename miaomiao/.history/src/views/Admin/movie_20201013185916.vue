<template>
<el-tabs type="border-card" :stretch=false class="tab">
  <el-tab-pane label="增加电影">增加电影</el-tab-pane>
  <el-tab-pane label="删除电影信息">删除电影信息</el-tab-pane>
  <el-tab-pane label="修改电影信息">修改电影信息</el-tab-pane>
  <el-tab-pane label="查看电影信息">查看电影信息</el-tab-pane>
</el-tabs>
</template>

<script>
export default {
  name:'',
  data(){
   return {

   }
  }
}
</script>

<style scoped>
.tab{
    width:80%;
}
</style>
