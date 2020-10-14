<template>
<div>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">喵喵电影后台管理</el-menu-item>
  <el-menu-item index="2">退出</el-menu-item>
</el-menu>
<el-row class="tac">
  <el-col :span="2">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
      <el-submenu index="1">
          
      </el-submenu>
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

</style>
