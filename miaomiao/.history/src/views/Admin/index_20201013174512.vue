<template>
<div>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1" class="title">喵喵电影后台管理</el-menu-item>
  <el-menu-item index="2" class="exit">退出</el-menu-item>
</el-menu>
<el-row class="tac">
  <el-col :span=2>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1">
          <i class="el-icon-location"></i>
          <span>导航一</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
</div>
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
.title{
    font-size:24px;
    color:red;
}
.exit{
    float:right;
    margin-right:10px;
}
</style>
