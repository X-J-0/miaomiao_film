<template>
    <div id="main">
        <Header title="喵喵电影"/>
        <div id="content">
          <div class="movie_menu">
          <div class="city_name">
            <span>大连</span><i>></i>
          </div>
          <div class="hot_switch">
            <div class="hot_item active">正在热映</div>
            <div class="hot_item">即将热映</div>
          </div>
          <div class="search_entry">
            <div>搜索</div>
          </div>
          </div>
          <keep_alive>
            <router-view/>
          </keep_alive>
        </div>
        <TabBar />
    </div>
</template>

<script>

import Header from '@/components/Header';
import TabBar from '@/components/TabBar';

export default {
  name:'Movie',
  components : {
    Header,
    TabBar
  },
  data(){
   return {

   }
  }
}
</script>

<style scoped>
  #content{flex:1;overflow:auto;margin-bottom:50px;position: relative;display:flex;flex-direction: column;}
  #content .movie_menu{width:100%;height:45px;border-bottom:1px solid #e6e6e6;display: flex;justify-content: space-between;}
  .movie_menu .city_name{margin-left:20px;height:100%;line-height:45px;}
  .movie_menu .city_name.active{color:#ef4238;border-bottom:2px #ef4238 solid;}
  .movie_menu .hot_switch{display:flex;height:100%; line-height: 45px;}
  .movie_menu .hot_item{font-size:15px; color:#666;width:80px;text-align: center;margin:0 12px;font-weight: 700;}
  .movie_menu .hot_item.active{color:#ef4238;border-bottom:2px #ef4238 solid;}
  .movie_menu .search_entry{margin-left:20px;height:100%;line-height:45px;}
  .movie_menu .search_entry.active{color:#ef4238;border-bottom:2px #ef4238 solid;}
  .movie_menu .search_entry div{font-size:18px;color:red;}
</style>
