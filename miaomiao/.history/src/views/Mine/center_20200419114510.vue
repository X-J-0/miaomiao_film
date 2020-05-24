<template>
    <div class="main">
      <div class="img"><img src="/images/person.png" width="80px" height="80px"></div>
      <div class="info">用户：{{$store.state.user.name}}<a href="javascript:;" @click="handleToLogout" class="exit">退出</a></div>
      <div v-if='$store.state.user.admin'>您是管理员,<a href="/admin" target="_blank" class="admin">由此进入管理界面</a></div>
      <div v-else>您好，欢迎使用喵喵电影</div>
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
.main{height:100%;width:100%;}
.img{margin-top: 10px;margin-left: 10px;}
.info{position:absolute;top:10px;right:10px;}
</style>
