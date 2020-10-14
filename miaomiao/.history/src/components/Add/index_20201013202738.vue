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
html,
body {height: 90%;margin: 0;padding: 0;background-color: #58596b;}
.active {color: #fff;background: #e74c3c;}
.main {margin-top:-5%;width: 90%;height: 100%;background-color: #fff;box-shadow: 0 1px 3px rgba(0, 0, 0, .1);float:right; }
.menuList {width: 100%;height: 60px;background-color: #33344a;}
ul {width: 100%;display: flex;list-style: none;padding: 0;margin: 0;color: #717181;font-size: 16px;line-height: 60px;}
ul li {flex: 1;text-align: center;cursor: pointer;}
.tabCon {width: 100%;padding: 40px 20px;color: #999;font-size: 14px;background-color: #fff;  }
.tabCon .admin_body{width:100%;}
.admin_body .admin_text{width:100%;height:40px;border:none;border-bottom:1px #ccc solid;margin-bottom:5px;outline:none;text-indent:10px;margin-right: 20px;}
.admin_body .admin_btn{height:50px;margin-top:15px;margin-right: 20px;}
.admin_body .admin_btn input{width:100%;height:100%;background-color:#e54847;border-radius: 3px;border:none;display:block;color:white;font-size:20px;}
</style>
