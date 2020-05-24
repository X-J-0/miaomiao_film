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
#content .cinema_menu{width:100%;height:45px;border-bottom:1px solid #e6e6e6;diaplay:flex;justify-content:space-around;align-items: center;background-color: #fff; ;}
</style>
