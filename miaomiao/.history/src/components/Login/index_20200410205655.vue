<template>
<div class="login_body">
    <div>
        <input v-model="username" class="login_text" type="text" placeHolder="账户名/手机号/Email">
    </div>
    <div>
        <input v-model="password" class="login_text" type="password" placeHolder="请输入您的密码">
    </div>
    <div class="login_btn">
        <input type="submit" value="登录" @click="handleToLogin">
    </div>
    <div class="login_link">
        <router-link to="/mine/register">立即注册</router-link>
        <router-link to="/mine/findpassword">找回密码</router-link>
    </div>
</div>
</template>

<script>
export default {
  name:'Login',
  data(){
   return {
      username:'',
      password:'' 
   }
  },
  methods:{
      handleToLogin(){
          console.log(this.username);
          console.log(this.password);
          this.axios.post('/api2/users/login',{
              username:this.username,
              password:this.possward
          }).then((res)=>{
              console.log(res);
              var status = res.data.status;
              console.log(status);
              if(status === 0){
                  this.$router.push('/mine/center');
              }else{
                  alert('登录失败');
              }
          })
      }
  }
}
</script>

<style scoped>
#content .login_body{width:100%;}
.login_body .login_text{width:100%;height:40px;border:none;border-bottom:1px #ccc solid;margin-bottom:5px;outline:none;text-indent:10px;}
.login_body .login_btn{height:50px;margin:10px;}
.login_body .login_btn input{width:100%;height:100%;background-color:#e54847;border-radius: 3px;border:none;display:block;color:white;font-size:20px;}
.login_body .login_link{display: flex;justify-content: space-between;}
.login_body .login_link a{text-decoration: none;margin:0 5px;font-size:12px;color:#e54847;}
</style>
