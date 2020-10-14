<template>
<div>
<el-menu class="el-menu-demo" mode="horizontal">
  <el-menu-item index="1" class="title">喵喵电影后台管理</el-menu-item>
  <el-menu-item index="2" class="exit">退出</el-menu-item>
</el-menu>
<el-row class="tac">
  <el-col :span=2>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      >
      <el-menu-item index="1" @click="handleToMovie">
          <i class="el-icon-location"></i>
          <span>导航一</span>
      </el-menu-item>
      <el-menu-item index="2" @click="handleToCinema">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
<router-view></router-view>
</div>
</template>

<script>
import Movie from './Movie';
import Cinema from './Cinema';
export default {
  name:'',
  components:{
      Movie,
      Cinema
  },
  data(){
   return {

   }
  },
  methods:{
    handleToMovie(){
      this.$router.push({path:'/admin/movie'});
    }
  }
}
</script>

<style scoped>
.title{
    font-size:24px;
    color:rgb(116, 101, 101);
}
.exit{
    float:right;
    margin-right:10px;
}
</style>
