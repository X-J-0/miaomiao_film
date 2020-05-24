<template>
    <div id="main">
        <Header />
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
