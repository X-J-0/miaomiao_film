<template>
    <div class="main">
        <div class="menuList">
        <ul>
            <li v-for="(item,index) in list" :key="index" :class="{active:num==item}" @click="getNum(item)">
            {{item}}
            </li>
        </ul>
        </div>
        <div class="tabCon">
        <div v-for='(itemCon,index) in tabContents' :key="index" v-show="itemCon == num">
            <div>{{itemCon}}</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name:'',
  data(){
   return {
          num: "增加",
          list: ["增加", "删除", "修改","查看"],
          tabContents: [
            "增加", 
            "删除",
            "修改",
            "查看"
          ],  
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
</style>
