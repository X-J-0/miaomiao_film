<template>
    <div>
      <div>个人中心</div>
      <div>当前用户：{{$store.state.user.name}}<a href="javascript:;" @click="handleToLogout">退出</a></div>
      <div v-if='$store.state.user.admin'>用户身份:管理员<a href="/admin">进入管理界面</a></div>
      <div v-else>用户身份:普通用户</div>
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
            var status = res.data.status;
            if(status === 0){
              this.$store.commit('user/USER_NAME',{name:'',admin:false});
              this.$router.push('/mine/login');
            }
          });
    }
  },
  beforeRouteEnter (to, from, next) {
    axios.get('/api2/users/getUser').then((res)=>{
      var status = res.data.status;
      if(status === 0){
        next(vm=>{
          vm.$store.commit('user/USER_NAME',{name:res.data.data.username,admin:res.data.data.admin});
        });
      }else{
        next('/mine/login');
      }
    });
  }
}
</script>

<style scoped>

</style>
