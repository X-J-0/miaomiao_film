<template>
    <div id="main">
        <Header title="喵喵影院" />
        <div id="content">
          <div class="cinema_menu">
            <div class="city_switch">
              全城>
            </div>
            <div class="brand_switch">
              品牌>
            </div>
            <div class="feature_switch"></div>
          </div>
        </div>
        <TabBar />
    </div>
</template>

<script>

import Header from '@/components/Header';
import TabBar from '@/components/TabBar';

export default {
  name:'Cinema',
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
