<template>
    <div class="main">
        <div class="menuList">
        <ul>
            <li v-for="(item,index) in list" :key="item.id" :class="{active:num==index}" @click="getNum(index)">
            {{item}}
            </li>
        </ul>
        </div>
        <div class="tabCon">
        <div v-show="0 == num">
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
                    <input v-model="dec" class="admin_text" type="text" placeHolder="详情介绍">
                </div>
                <div>
                    <label for="file">电影图片:</label>
                    <input type="file">
                </div>
                <div class="admin_btn">
                    <input type="submit" value="增加" @click="handleToAdd">
                </div>
            </div>
        </div>
        <div v-show="1 == num">
            <div class="admin_body">
                <div>
                    <input v-model="dec" class="admin_text" type="text" placeHolder="请输入要删除的电影名称">
                </div>
                <div class="admin_btn">
                    <input type="submit" value="删除" @click="handleToRemove">
                </div>
            </div>
        </div>
        <div v-show="2 == num">
            <div class="admin_body">
                <div>
                    <input v-model="dec" class="admin_text" type="text" placeHolder="请输入要修改的电影名称">
                    <button @click="handleToVerify" class="verify">确定</button>
                </div>
                <div v-if="isShow">
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
                    <input v-model="dec" class="admin_text" type="text" placeHolder="详情介绍">
                </div>
                <div>
                    <label for="file">电影图片:</label>
                    <input type="file">
                </div>
                </div>
                <div class="admin_btn">
                    <input type="submit" value="修改" @click="handleToChange">
                </div>
            </div>
        </div>
        <div v-show="3 == num"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name:'',
  data(){
   return {
          num: 0,
          list: ["增加", "删除", "修改","查看"],
          name:'',
          remark:'',
          actress:'',
          times:'',
          dec:'',
          isShow:false
   }
  },
  methods:{
    getNum(index) {
        this.num = index;
    },
    handleToAdd(){

    },
    handleToRemove(){

    },
    handleToChange(){

    },
    handleToVerify(){
        this.isShow="true";
    }
  },
  beforeRouteEnter (to, from, next) {
    axios.get('/api2/admin').then((res)=>{
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
    html,
    body {
      height: 100%;
      margin: 0;
      padding: 0;
      background-color: #58596b;
    }

    .active {
      color: #fff;
      background: #e74c3c;
    }

    .main {
      width: 100%;
      height: 100%;
      background-color: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .1); 
    }

    .menuList {
      width: 100%;
      height: 60px;
      background-color: #33344a;
    }

    ul {
      width: 100%;
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      color: #717181;
      font-size: 16px;
      line-height: 60px;
    }

    ul li {
      flex: 1;
      text-align: center;
      cursor: pointer;
    }

    .tabCon {
      width: 100%;
      padding: 40px 20px;
      color: #999;
      font-size: 14px;
      background-color: #fff;
    }
.tabCon .admin_body{width:100%;}
.admin_body .admin_text{width:100%;height:40px;border:none;border-bottom:1px #ccc solid;margin-bottom:5px;outline:none;text-indent:10px;}
.admin_body .admin_btn{height:50px;margin-top:15px;}
.admin_body .admin_btn input{width:100%;height:100%;background-color:#e54847;border-radius: 3px;border:none;display:block;color:white;font-size:20px;}
.admin_body .admin_link{display: flex;justify-content: space-between;}
.admin_body .admin_link a{text-decoration: none;margin:0 5px;font-size:12px;color:#e54847;}
.verify{position:absolute;top:40px;right:10px;height:30px;background-color: #e54847;border-radius: 3px;border:none;padding:5px;color:white;}
</style>
