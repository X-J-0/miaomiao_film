<template>
    <div id="main">
        <Header title="喵喵电影"/>
        <div id="content">
          <div class="city_name">
            <span>大连</span><i>></i>
          </div>
          <div class="hot_switch">
            <div class="hot_item active">正在热映</div>
            <div class="hot_item">即将热映</div>
          </div>
          <div class="search_entry">
            <i>搜索</i>
          </div>
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

</style>
