<template>
    <div id="main">
        <Header title="喵喵影院" />
        <div id="content">
          <ul class="cinema_menu">
            <li class="city_switch">
              全城>
            </li>
            <li class="brand_switch">
              品牌>
            </li>
            <li class="feature_switch">
              特色>
            </li>
          </ul>
        </div>
        <Clist/>
        <TabBar />
    </div>
</template>

<script>

import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import Clist from '@/components/Clist';
export default {
  name:'Cinema',
    components : {
    Header,
    TabBar,
    Clist
  },
  data(){
   return {

   }
  }
}
</script>

<style scoped>
  #content{flex:1;overflow:auto;margin-bottom:50px;position: relative;display:flex;flex-direction: column;}
  #content .cinema_menu{width:100%;height:45px;border-bottom:1px solid #e6e6e6;display: flex;justify-content: space-between;}
  .cinema_menu li{margin-left:20px;height:100%;line-height:45px;}
  .cinema_menu li.active{color:#ef4238;border-bottom:2px #ef4238 solid;}
  .cinema_menu li.router-link-active{color:#ef4238;border-bottom:2px #ef4238 solid;}
</style>
