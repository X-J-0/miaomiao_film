<template>
<div>
    <div class="admin_body">
                <div>
                    <input v-model="name" class="admin_text" type="text" placeHolder="电影名称">
                </div>
                <div>
                    <input v-model="remark" class="admin_text" type="text" placeHolder="观众评价">
                </div>
                <div>
                    <input v-model="actress" class="admin_text" type="text" placeHolder="主演">
                </div>
                <div>
                    <input v-model="times" class="admin_text" type="text" placeHolder="播放次数">
                </div>
                <div>
                    <textarea v-model="dec" class="admin_text" placeHolder="详情介绍"></textarea>
                </div>
                <div>
                    <label for="file">电影图片:</label>
                    <input type="file" ref="file" @change="handleFileUpload"> 
                </div>
                <div class="admin_btn">
                    <input type="submit" value="增加" @click="handleToAdd">
                </div>
            </div>
</div>

</template>

<script>
export default {
  name:'',
  data(){
   return {

   }
  }
}
</script>

<style scoped>
.admin_body .admin_text{width:100%;height:40px;border:none;border-bottom:1px #ccc solid;margin-bottom:5px;outline:none;text-indent:10px;margin-right: 20px;}
.admin_body .admin_btn{height:50px;margin-top:15px;margin-right: 20px;}
</style>
