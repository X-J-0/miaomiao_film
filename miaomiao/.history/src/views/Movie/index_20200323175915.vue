<template>
    <div id="main">
        <header />
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
