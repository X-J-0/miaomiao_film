<template>
    <div id="detailContrainer">
        <header id="header">
            <i class="iconfont icon-right"></i><h1>影片详情</h1>
        </header>
        <div id="content" class="contentDetail">
            <div class="detail_list">
                <div class="detail_list_bg"></div>
                <div class="detail_list_filter"></div>
                <div class="detail_list_content">
                    <div class="detail_list_img">
                        <img src="images/movie_1.jpg" alt="">
                    </div>
                    <div class="detail_list_info">
                        <h2>无名之辈</h2>
                        <p>A Cool Fish</p>
                        <p>9.2</p>
                        <p>剧情，喜剧，犯罪</p>
                        <p>中国大陆/108分钟</p>
                        <p>2018-11-16大陆上映</p>
                    </div>
                </div>
            </div>
            <div class="detail_intro">
                <p>在一座山间小城中，一堆低配劫匪、一个保安、一个毒舌女以及不同轨迹上的小人物，因为一把丢失的老枪和一桩当天发生在城中的乌龙劫案，从而被阴差阳错地拧到一起，发生的一幕幕令人啼笑皆非的荒诞喜剧。</p>
            </div>
            <div class="detail_player swiper-container">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide">
                        <div>
                            <img src="images/person_1.webp" alt="">
                        </div>
                        <p>陈建斌</p>
                        <p>马先勇</p>
                    </li>
                    <li class="swiper-slide">
                        <div>
                            <img src="images/person_1.webp" alt="">
                        </div>
                        <p>陈建斌</p>
                        <p>马先勇</p>
                    </li>
                    <li class="swiper-slide">
                        <div>
                            <img src="images/person_1.webp" alt="">
                        </div>
                        <p>陈建斌</p>
                        <p>马先勇</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'Detail',
  data(){
   return {

   }
  }
}
</script>

<style scoped>

</style>
