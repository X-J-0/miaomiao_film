<template>
<div>
  <el-tabs type="border-card" :stretch=false class="tab">
    <el-tab-pane label="电影信息"><Info></Info>></el-tab-pane>
    <el-tab-pane label="增加电影" @click="handleToAdd(tag)"><Add></Add>></el-tab-pane>
  </el-tabs>
</div>

</template>

<script>
import Add from '../../components/Add';
import Info from '../../components/Info';
export default {
  name:'',
  components:{
    Add,
    Info
  },
  data(){
   return {

   }
  },
  methods:{
    handleToAdd(){
      console.log(1);
      this.$router.push({path:'/admin/movie/add'});
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
