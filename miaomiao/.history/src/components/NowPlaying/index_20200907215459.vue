<template>
<div class="movie_body">
    <Loading v-if="isLoading"/>
    <ul v-else>
        <li v-for="item in movieList" :key="item._id">
            <div class="pic_show" @click="handleToDetail(item._id)"><img :src="item.pic | setWH('128.180') "></div>
            <div class="info_list">
                <h2 @click="handleToDetail(item._id)">{{item.name}}</h2>
                <p>观众评价<span class="grade">{{item.remark}}</span></p>
                <p>主演：{{item.actress}}</p>
                <p>播放了{{item.times}}次</p>
            </div>
            <div class="btn_pre">
              购票
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name:'NowPlaying',
  data(){
   return {
       movieList:[],
       isLoading:true,
       prevCityId:-1
   }
  },
   activated(){
       var cityId = this.$store.state.city.id;
       if(this.prevCityId === cityId){return;}
       this.isLoading = true;
       this.axios.get('/api2/movies/getinfo').then((res)=>{
           var status = res.data.status;
           if(status == 0){
               console.log(res.data.result)
               this.movieList = res.data.result;
               this.isLoading = false;
               this.prevCityId = cityId;
           }
       })
   },
   methods:{
       handleToDetail(movieId){
           console.log(movieId);
            this.$router.push('/movie/detail/' + movieId);
       }
   }
  }
</script>

<style scoped>
    #content .movie_body{flex:1;overflow:auto;}
    .movie_body ul{margin:0 12px; overflow:hidden;}
    .movie_body ul li{margin-top:12px;display:flex;align-items:center;border-bottom:1px solid #e6e6e6;padding-bottom:10px;}
    .movie_body .pic_show{width:64px; height:90px;}
    .movie_body .pic_show img{width:100%;}
    .movie_body .info_list{margin-top:50px;margin-left:10px;flex:1;position: relative;}
    .movie_body .info_list h2{font-size:17px;line-height: 24px;width:150px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
    .movie_body .info_list p{font-size:13px;color:#666;line-height: 22px;width:200px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
    .movie_body .info_list .grade{font-weight: 700;color:#faaf00;font-size:15px;}
    .pic_show img{width:50px;position: relative;right:10px;top:20px;}
    .movie_body .btn_mall, .movie_body .btn_pre{width:47px;height:27px;line-height: 28px;text-align: center;background-color: #f03d37;color:#fff;border-radius: 5%;}
</style>
