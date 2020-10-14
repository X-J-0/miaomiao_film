<template>
<div>
  <el-tabs type="border-card" :stretch=false class="tab">
    <el-tab-pane label="影院信息"><CinemaInfo></CinemaInfo>></el-tab-pane>
    <el-tab-pane label="增加影院" @click="handleToAdd(tag)"><CinemaAdd></CinemaAdd>></el-tab-pane>
  </el-tabs>
</div>

</template>

<script>
import CinemaAdd from '../../components/CinemaAdd';
import CinemaInfo from '../../components/CinemaInfo';
export default {
  name:'',
  components:{
    CinemaAdd,
    CinemaInfo
  },
  data(){
   return {

   }
  },
  methods:{
    handleToAdd(){
      this.$router.push({path:'/admin/cinema/add'});
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
