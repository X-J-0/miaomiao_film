<template>
<div>
    <div>
      邮箱：<input type="text"><button>发送验证码</button>
    </div>
    <div>
      新密码:<input type="password">
    </div>
    <div>
      验证码:<input type="text">
    </div>
    <div>
      <button>修改</button>
    </div>
    <div class="register_link">
        <router-link to="/mine/login">立即登录</router-link>
        <router-link to="/mine/findpassword">找回密码</router-link>
    </div>
</div>
</template>

<script>
export default {
  name:'findPassword',
  data(){
   return {

   }
  }
}
</script>

<style scoped>

</style>
