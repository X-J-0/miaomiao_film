<template>
<div class="movie_body">
    <Loading v-if="isLoading"/>
      <ul v-else>
        <li v-for="item in comingList" :key="item.id">
            <div class="pic_show" @click="handleToDetail(item.id)"><img :src="item.img | setWH('128.180') "></div>
            <div class="info_list">
                <h2 @click="handleToDetail(item.id)">{{item.nm}}</h2>
                <p><span class="person">{{item.wish}}</span>人想看</p>
                <p>主演：{{item.star}}</p>
                <p>{{item.rt}}上映</p>
            </div>
            <div class="btn_pre">
              预售
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name:'ComingSoon',
  data(){
   return {
       comingList:[],
       isLoading:true
   }
  },
  activated(){
    var cityId = this.$store.state.city.id;
    this.isLoading = true;
    this.axios.get('/api/movieComingList?cityId=10').then((res)=>{
    var msg = res.data.msg;
    if(msg === 'ok'){
        this.comingList = res.data.data.comingList;
        this.isLoading=false;
    }
       })
  },
   methods:{
       handleToDetail(movieId){
           this.$router.push('/movie/detail/1/' + movieId);
       }
   }
}
</script>

<style scoped>
    #content .movie_body{
        flex:1;
        overflow:auto;
    }
    .movie_body ul{
        margin:0 12px; 
        overflow:hidden;
    }
    .movie_body ul li{
        margin-top:12px;display:flex;align-items:center;border-bottom:1px solid #e6e6e6;padding-bottom:10px;
    }
    .movie_body .pic_show{width:64px; height:90px;}
    .movie_body .pic_show img{width:100%;}
    .movie_body .info_list{margin-top:50px;margin-left:10px;flex:1;position: relative;}
    .movie_body .info_list h2{font-size:17px;line-height: 24px;width:150px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
    .movie_body .info_list p{font-size:13px;color:#666;line-height: 22px;width:200px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
    .movie_body .info_list .grade{font-weight: 700;color:#faaf00;font-size:15px;}
    .pic_show img{width:50px;position: relative;right:10px;top:20px;}
    .movie_body .btn_mall, .movie_body .btn_pre{width:47px;height:27px;line-height: 28px;text-align: center;background-color: #f03d37;color:#fff;border-radius: 5%;}
    .movie_body .btn_pre{background-color: #3c9fe6;}

</style>
