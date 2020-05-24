<template>
<div class="register_body">
    <div class="register_email">
        邮箱:<input v-model="email" class="register_text" type="text"><button @click="handleToVerify">发送验证码</button>
    </div>
    <div>
      用户名：<input v-model="username" class="register_text" type="text">
    </div>
    <div>
      密码:<input v-model="password" class="register_text" type="text">
    </div>
    <div>
      验证码：<input v-model="verify" class="register_text" type="text">
    </div>
    <div class="register_btn">
        <input type="submit" value="注册" @click="handleToRegister">
    </div>
    <div class="register_link">
        <router-link to="/mine/login">立即登录</router-link>
        <router-link to="/mine/findpassword">找回密码</router-link>
    </div>
</div>
</template>

<script>
export default {
  name:'register',
  data(){
   return {
     email:'',
     username:'',
     password:'',
     verify:''
   }
  },
  methods:{
    handleToRegister(){
      this.axios.post('/api2/users/register',{
        email:this.email,
        username:this.username,
        password:this.password,
        verify:this.verify
      }).then((res)=>{
        var status = res.data.status;
        if(status === 0){
          alert('用户注册成功');
          this.$router.push('/mine/login');
        }else{
          alert('用户注册失败');
        }
      })
    },
    handleToVerify(){
      this.axios.get('/api2/users/verify?email='+this.email).then((res)=>{
        var status = res.data.status;
        if(status === 0){
          alert('验证码已发送');
        }else{
          alert('验证码发送失败');
        }
      })
    }
  }
}
</script>

<style scoped>
#content .register_body{width:100%;}
.register_body .register_text{width:100%;height:40px;border:none;border-bottom:1px #ccc solid;margin-bottom:5px;outline:none;text-indent:10px;}
.register_body .register_btn{height:50px;margin:10px;}
.register_body .register_btn input{width:100%;height:100%;background-color:#e54847;border-radius: 3px;border:none;display:block;color:white;font-size:20px;}
.register_body .register_link{display: flex;justify-content: space-between;}
.register_body .register_link a{text-decoration: none;margin:0 5px;font-size:12px;color:#e54847;}
.register_body .register_email{position:relative}
.register_body .register_email button{position:absolute;top:15px;right:10px;height:30px;background-color: #e54847;border-radius: 3px;border:none;padding:5px;color:white;}
</style>
