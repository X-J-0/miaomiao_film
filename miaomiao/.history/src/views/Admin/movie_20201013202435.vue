<template>
<div>
  <el-tabs type="border-card" :stretch=false class="tab">
    <el-tab-pane label="增加电影"><Add></Add>></el-tab-pane>
    <el-tab-pane label="删除电影信息">删除电影信息</el-tab-pane>
    <el-tab-pane label="修改电影信息">修改电影信息</el-tab-pane>
    <el-tab-pane label="查看电影信息">查看电影信息</el-tab-pane>
  </el-tabs>
<router-view></router-view>
</div>

</template>

<script>
import Add from '../../components/Add';
import Delete from '../../components/Delete';
import Change from '../../components/Change';
import Find from '../../components/Find';
export default {
  name:'',
  components:{
    Add,
    Delete,
    Change,
    Find
  },
  data(){
   return {

   }
  }
}
</script>

<style scoped>
.tab{
    position: absolute;
    top:10%;
    margin-left:19vh;
    width:90%;
}
</style>
