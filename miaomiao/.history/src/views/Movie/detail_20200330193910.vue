<template>
    <div id="detailContrainer">
        <Header title = "影片详情">
            <div @click="handleToBack">返回上一页</div>
        </Header>
        <div id="content" class="contentDetail">
            <div class="detail_list">
                <div class="detail_list_bg"></div>
                <div class="detail_list_filter"></div>
                <div class="detail_list_content">
                    <div class="detail_list_img">
                        <img src="/images/movie_1.jpg" alt="">
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
                            <img src="images/movie_2.jpg" alt="">
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
import Header from '@/components/Header';
export default {
  name:'Detail',
  components:{
      Header
  },
  methods:{
      handleToBack(){
          this.$router.back();
      }
  },
  data(){
   return {

   }
  }
}
</script>

<style scoped>
    #detailContrainer{position:absolute;left:0;top:0;z-index:100;width:100%;min-height:10%;background-color: #fff;}
    #content.contentDetail{display:block;margin-bottom:0;}
    #content .detail_list{height:200px;width:100%;position: relative;overflow:hidden;}
    .detail_list .detail_list_bg{width:100%;height:100%;background: url('/images/movie_1.jpg') 0 40%;filter:blur(20px);background-color: transparent;}
    .detail_list .detail_list_filter{width:100%;height:100%;position:absolute;background-color: #40454d;opacity: .55;}
    .detail_list .detail_list_content{display:flex;width:100%;height:100%;position:absolute;left:0;top:0;z-index:2;}
    .detail_list .detail_list_img{width:108px;height:150px;border:solid 1px #f0f2f3;margin:20px;}
    .detail_list .detail_list_img img{width:100%;height:100%;}
    .detail_list .detail_list_info{margin-top:20px;}
    .detail_list .detail_list_info h2{font-size:20px;color:white;font-weight:normal;line-height:40px;}
    .detail_list .detail_list_info p{color:white;line-height: 20px;font-size:14px;color:#ccc;}
</style>
