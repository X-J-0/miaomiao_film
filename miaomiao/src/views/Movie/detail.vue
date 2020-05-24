<template>
    <div id="detailContrainer" class="slide-enter-active">
        <Header title = "影片详情">
            <i class="posi" @click="handleToBack">&gt;</i>
        </Header>
        <Loading v-if="isLoading"/>
        <div v-else id="content" class="contentDetail">
            <div class="detail_list">
                <div class="detail_list_bg" :style="{'background-image':'url('+ detailMovie.pic.replace(/w\.h/,'148.208') +')'}"></div>
                <div class="detail_list_filter"></div>
                <div class="detail_list_content">
                    <div class="detail_list_img">
                        <img :src="detailMovie.pic | setWH('148.208')" alt="">
                    </div>
                    <div class="detail_list_info">
                        <h2>{{detailMovie.name}}</h2>
                        <p>{{detailMovie.remark}}</p>
                        <p>{{detailMovie.actress}}</p>
                        <!-- <p>{{detailMovie.cat}}</p>
                        <p>{{detailMovie.src}}/{{detailMovie.dur}}分钟</p>
                        <p>{{detailMovie.pubDesc}}</p> -->
                    </div>
                </div>
            </div>
            <div class="detail_intro">
                <p>{{detailMovie.dec}}</p>  
            </div>
            <div class="detail_player swiper-container">
                <ul class="swiper-wrapper">
                    <li v-for="(item,index) in detailMovie.photos" :key="index" class="swiper-slide">
                        <div>
                            <img :src="item | setWH('40.70')" alt="">
                        </div>
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
    data(){
   return {
       detailMovie:{},
       isLoading:true
   }
  },
  components:{
      Header
  },
  props:['movieId'],
  methods:{
      handleToBack(){
          this.$router.back();
      }
  },
  mounted(){
      this.axios.post('/api2/movies/getdetail',{
          _id:this.movieId
      }).then((res)=>{
          var status = res.data.status;
          if(status == 0){
              this.isLoading = false;
              this.detailMovie = res.data.result[0];
          }
      })
  }
}
</script>

<style scoped>
    .posi{display:flex;align-items: center;}
    #detailContrainer.slide-enter-active{animation:.3s slideMove;}
    @keyframes slideMove{
        0%{transform:translateX(100%);}
        100%{transform:translateX(0);}
    }
    .swiper-slide div{width:100%;height:100%;}
    #detailContrainer{position:absolute;left:0;top:0;z-index:100;width:100%;min-height:10%;background-color: #fff;}
    #content.contentDetail{display:block;margin-bottom:0;}
    #content .detail_list{height:200px;width:100%;position: relative;overflow:hidden;}
    .detail_list .detail_list_bg{width:100%;height:100%;background: 0 40%;filter:blur(20px);background-color: transparent;}
    .detail_list .detail_list_filter{width:100%;height:100%;position:absolute;background-color: #40454d;opacity: .55;}
    .detail_list .detail_list_content{display:flex;width:100%;height:100%;position:absolute;left:0;top:0;z-index:2;}
    .detail_list .detail_list_img{width:108px;height:150px;border:solid 1px #f0f2f3;margin:20px;}
    .detail_list .detail_list_img img{width:100%;height:100%;}
    .detail_list .detail_list_info{margin-top:20px;}
    .detail_list .detail_list_info h2{font-size:20px;color:white;font-weight:normal;line-height:40px;}
    .detail_list .detail_list_info p{color:white;line-height: 20px;font-size:14px;color:#ccc;}
    #content .detail_intro{padding:10px;}
    #content .detail_player{margin:20px;}
    .detail_player .swiper-slide{width:70px;margin-left:20px;text-align: center;font-size:14px;}
    .detail_player .swiper-slide{float:left;margin-top:20px;margin-left:10px;}
    .detail_player .swiper-slide div img{width:40px;height:70px;}
    .detail_player .swiper-slide p:nth-of-type(2){color:#999;}
</style>
