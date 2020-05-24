<template>
<div class="register_body">
    <div>
        邮箱:<input class="register_text" type="text"><button>发送验证码</button>
    </div>
    <div>
      用户名：<input class="register_text" type="text">
    </div>
    <div>
      密码:<input class="register_text" type="text">
    </div>
    <div>
      验证码：<input class="register_text" type="text">
    </div>
    <div>
      <button>注册</button>
    </div>
</div>
</template>

<script>
export default {
  name:'register',
  data(){
   return {

   }
  }
}
</script>

<style scoped>
#content .register_body{width:100%;}
.register_body .register_text{width:100%;height:40px;border:none;border-bottom:1px #ccc solid;margin-bottom:5px;outline:none;text-indent:10px;}
.register_body .register_btn{height:50px;margin:10px;}
.register_body .register_btn button{width:100%;height:100%;background-color:#e54847;border-radius: 3px;border:none;display:block;color:white;font-size:20px;}
.register_body .register_link{display: flex;justify-content: space-between;}
.register_body .register_link a{text-decoration: none;margin:0 5px;font-size:12px;color:#e54847;}

</style>
