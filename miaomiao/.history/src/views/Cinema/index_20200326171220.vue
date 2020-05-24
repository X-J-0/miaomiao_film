<template>
    <div id="main">
        <Header title="喵喵影院" />
        <div id="content">
          <div class="cinema_menu">
            <router-link tag="div" to="/cinema/allcity" class="city_switch">
              全城>
            </router-link>
            <router-link tag="div" to="/cinema/brand" class="brand_switch">
              品牌>
            </router-link>
            <router-link tag="div" to="/cinema/special" class="feature_switch">
              特色>
            </router-link>
          </div>
        </div>
        <Clist/>
        <keep-alive>
            <router-view/>
        </keep-alive>
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
#content .cinema_menu{width:100%;height:45px;border-bottom:1px solid #e6e6e6;display:flex;justify-content:space-around;align-items: center;background-color: #fff; ;}
</style>
