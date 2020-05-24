<template>
    <div>
        个人中心：<a href="javascript:;" @click="handleToLogout">退出</a>
    </div>
</template>

<script>
export default {
  name:'Center',
  data(){
   return {

   }
  },
  methods:{
    handleToLogout(){
          this.$router.push('/mine/login');
    }
  }
}
</script>

<style scoped>

</style>
