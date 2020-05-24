<template>
  <div class="search_body">
    <div class="search_input">
      <div class="search_input_wrapper">
        <!-- <i class="iconfont icon sousuo"></i> -->
        <input type="text" v-model="message" @input="changeInput">
      </div>
      <input type="submit" class="sousuo" value="搜索" @click="handleToSearch">
    </div>
    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
            <div v-if="isSearch" class="movie_body">
            <ul>
                <li>
                    <div class="pic_show" ><img :src="item.pic | setWH('128.180') "></div>
                    <div class="info_list">
                        <h2 >{{movieList.name}}</h2>
                        <p>观众评价<span class="grade">{{movieList.remark}}</span></p>
                        <p>{{movieList.actress}}</p>
                        <p>播放了{{movieList.times}}次</p>
                    </div>
                    <div class="btn_pre">
                    购票
                    </div>
                </li>
            </ul>
            </div>
            <div v-if="isAppeal" class="movie_bodys">
            <ul>
            <li v-for="item in this.movieLists" :key="item.id">
                <div class="pic_show"><img :src="item.pic | setWH('128.180') "></div>
                <div class="info_list">
                    <h2>{{item.name}}</h2>
                    <p>观众评价<span class="grade">{{item.remark}}</span></p>
                    <p>{{item.actress}}</p>
                    <p>播放了{{item.times}}次</p>
                </div>
                <div class="btn_pre">
                    购票
                </div>
            </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Search',
  data(){
   return {
      message:'',
      moviesList:'',
      movieLists:'',
      timeout:null,
      isSearch:false,
      isAppeal:true,
   }
  },
  mounted(){
    this.axios.get('/api2/movies/getinfo').then((res) => {
        var status = res.data.status;
        if(status === 0){
            this.movieLists = res.data.result;
            console.log(this.movieLists);
        }
    })
  },
  methods:{
    changeInput(){
        if(this.message==''){
            this.isSearch=false;
        }
    },
    handleToSearch(){
           this.axios.post('/api2/movies/getname',{
               name:this.message
           }).then((res)=>{
           var status = res.data.status;
           if(status == 0 && res.data.result!=null){
               this.movieList = res.data.result[0];
               console.log(this.movieList);
               this.isSearch = true;
           }else{
               alert('没找到');
           }
       })
    }
  },
}
    
</script>

<style scoped>
#content .search_body{flex:1;overflow:auto;}
.search_body .search_input{padding:8px 10px;background-color: #fff;border-bottom:1px solid #e5e5e5;}
.search_body .search_input_wrapper{padding:0 10px;border:1px solid #e6e6e6;border-radius: 5px;background-color: #fff;}
.search_body .search_input_wrapper i{font-size:16px; padding:4px 0;}
.search_body .search_input_wrapper input{border:none;font-size: 13px;color:#333;padding:4px 0;outline:none;margin-left:5px;width:100%;}
.search_body .search_result h3{font-size:15px;color:#999;padding:9px 15px;border-bottom:1px solid #e6e6e6;}
.search_body .search_result li{border-bottom: 1px #c9c9c9 dashed;padding:10px 15px;box-sizing: border-box;display: flex;}
.search_body .search_result .img{width:60px;float:left;}
.search_body .search_result .img img{width:100%;}
.search_body .search_result .info{float:left;margin-left:15px;flex:1;}
.search_body .search_result .info p{height:22px; display: flex;line-height: 22px;font-size: 12px;}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){font-size:18px;flex:1;}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){font-size:16px;color:#fc7103;}
.movie_body{width:100%;flex:1;overflow:hidden;}
.movie_body ul{margin:0 12px; overflow:hidden;}
.movie_body ul li{margin-top:12px;display:flex;align-items:center;border-bottom:1px solid #e6e6e6;padding-bottom:10px;}
.movie_body .pic_show{width:64px; height:90px;}
.movie_body .pic_show img{width:100%;}
.movie_body .info_list{margin-top:50px;margin-left:10px;flex:1;position: relative;}
.movie_body .info_list h2{position: relative;left:40px;font-size:17px;line-height: 24px;width:150px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-left: -40px;}
.movie_body .info_list p{position: relative;left:50px;font-size:13px;color:#666;line-height: 22px;width:200px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-left: -50px;}
.movie_body .info_list .grade{font-weight: 700;color:#faaf00;font-size:15px;}
.pic_show img{width:50px;position: relative;right:10px;top:20px;}
.movie_body .btn_pre{width:60px;height:27px;line-height: 28px;text-align: center;background-color: #f03d37;color:#fff;border-radius: 5%;}
.movie_bodys{width:100%;flex:1;overflow:hidden;}
.movie_bodys ul{margin:0 12px; overflow:hidden;flex-direction: column;}
.movie_bodys ul li{margin-top:12px;display:flex;align-items:center;border-bottom:1px solid #e6e6e6;padding-bottom:10px;}
.movie_bodys .pic_show{width:64px; height:90px;}
.movie_bodys .pic_show img{width:100%;}
.movie_bodys .info_list{margin-top:50px;margin-left:10px;flex:1;position: relative;}
.movie_bodys .info_list h2{font-size:17px;line-height: 24px;width:150px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-left: -40px;position: relative;left:40px;}
.movie_bodys .info_list p{font-size:13px;color:#666;line-height: 22px;width:200px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-left: -50px;position: relative;left:50px;}
.movie_bodys .info_list .grade{font-weight: 700;color:#faaf00;font-size:15px;}
.pic_show img{width:50px;position: relative;right:10px;top:20px;}
.movie_bodys .btn_pre{width:60px;height:27px;line-height: 28px;text-align: center;background-color: #f03d37;color:#fff;border-radius: 5%;}
.sousuo{width:47px;height:27px;line-height: 28px;text-align: center;background-color: #f03d37;color:#fff;border-radius:5px;border:transparent;margin-left:87%;margin-top: 10px;}
</style>
