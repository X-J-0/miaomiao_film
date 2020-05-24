<template>
    <div id="main">
        <Header title="喵喵影院" />
        <div id="content">
          <div class="cinema_menu">
            <span class="city_switch">
              全城>
            </span>
            <span class="brand_switch">
              品牌>
            </span>
            <span class="feature_switch">
              特色>
            </span>
          </div>
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

</style>
