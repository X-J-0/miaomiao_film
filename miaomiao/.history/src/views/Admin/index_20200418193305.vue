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
        <div v-for='(itemCon,index) in tabContents' :key="index" v-show="index == num">
            <div>{{itemCon}}</div>
        </div>
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
          tabContents: [
            <h1>张三丰</h1>, 
            "独孤求败，自号“剑魔”，纵横江湖三十馀载，杀尽仇寇，败尽英雄，天下更无抗手，无可奈何，惟隐居深谷，以雕为友。呜呼，生平求一敌手而不可得，诚寂寥难堪也。在小说中从未出场过，只曾在人物的口中提及。",
            "周伯通不是金大师小说中的主角，也不是塑造的最丰满、最完善的形象，更不是侠客或英雄的代表，而且就武侠小说最基本的要素-武功、武学所达到的境界来说，周伯通也不是绝顶高手，但毫无疑问，周伯通是金大师所塑造的所有人物中最有意思的一位，至少是最有意思的人物之一。"
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
