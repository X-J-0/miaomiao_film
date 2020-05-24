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
            <div class="add_body">
                <div>
                    <input v-model="name" class="add_text" type="text" placeHolder="电影名称">
                </div>
                <div>
                    <input v-model="remark" class="add_text" type="text" placeHolder="观众评价">
                </div>
                <div>
                    <input v-model="actress" class="add_text" type="text" placeHolder="主演">
                </div>
                <div>
                    <input v-model="times" class="add_text" type="text" placeHolder="播放次数">
                </div>
                <div>
                    <input v-model="des" class="add_text" type="text" placeHolder="详情介绍">
                </div>
                <div>
                    <label for="file">电影图片:</label>
                    <input type="file">
                </div>
                <div class="add_btn">
                    <input type="submit" value="增加" @click="handleToAdd">
                </div>
            </div>
        </div>
        <div v-show="1 == num"></div>
        <div v-show="2 == num"></div>
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
          list: ["增加", "删除", "修改","查看"]
   }
  },
  methods:{
    getNum(index) {
        this.num = index;
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
.tabCon .add_body{width:100%;}
.add_body .add_text{width:100%;height:40px;border:none;border-bottom:1px #ccc solid;margin-bottom:5px;outline:none;text-indent:10px;}
.add_body .add_btn{height:50px;margin-top:15px;margin-left:-10px;}
.add_body .add_btn input{width:100%;height:100%;background-color:#e54847;border-radius: 3px;border:none;display:block;color:white;font-size:20px;}
.add_body .add_link{display: flex;justify-content: space-between;}
.add_body .add_link a{text-decoration: none;margin:0 5px;font-size:12px;color:#e54847;}

</style>
