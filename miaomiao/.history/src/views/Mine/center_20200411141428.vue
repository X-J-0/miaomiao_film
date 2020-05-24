<template>
    <div>
        个人中心：<a href="javascript:;" @click="handleToLogout">退出</a>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name:'center',
  data(){
   return {

   }
  },
  methods:{
    handleToLogout(){
          this.axios.get('/api2/users/logout').then((res) => {
            var status = res.data.satus;
            if(status === 0){
              this.$router.push('/mine/login');
            }
          });
    }
  },
  beforeRouteEnter (to, from, next) {
    axios.get('/api2/users/getUser').then((res)=>{
      var status = res.data.status;
      if(status === 0){
        next();
      }else{
        next('/mine/login');
      }
    });
  }
}
</script>

<style scoped>

</style>
