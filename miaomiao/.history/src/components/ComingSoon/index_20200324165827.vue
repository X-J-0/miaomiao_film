<template>
<div class="movie_body">
      <ul>
        <li>
            <div class="pic_show"><img src="/images/movie_1.jpg"></div>
            <div class="info_list">
                <h2>无名之辈</h2>
                <p>观众评价<span class="grade">9.2</span></p>
                <p>主演：陈建斌，任素汐，潘斌龙</p>
                <p>2018-11-30上映</p>
            </div>
            <div class="btn_pre">
              预售
            </div>
        </li>
        <li>
            <div class="pic_show"><img src="/images/movie_2.jpg"></div>
            <div class="info_list">
                <h2>毒液：致命守护者</h2>
                <p>观众评价<span class="grade">9.3</span></p>
                <p>主演：汤姆 哈迪 米歇尔</p>
                <p>2018-11-30上映</p>
            </div>
              <div class="btn_pre">
              预售
            </div>
        </li>
         <li>
            <div class="pic_show"><img src="/images/movie_1.jpg"></div>
            <div class="info_list">
                <h2>无名之辈</h2>
                <p>观众评价<sapn class="grade">9.2</sapn></p>
                <p>主演：陈建斌，任素汐，潘斌龙</p>
                <p>2018-11-30上映</p>
            </div>
            <div class="btn_pre">
              预售
            </div>
        </li>
        <li>
            <div class="pic_show"><img src="/images/movie_2.jpg"></div>
            <div class="info_list">
                <h2>毒液：致命守护者</h2>
                <p>观众评价<sapn class="grade">9.3</sapn></p>
                <p>主演：汤姆 哈迪 米歇尔</p>
                <p>2018-11-30上映</p>
            </div>
            <div class="btn_pre">
              预售
            </div>
        </li>
        <li>
            <div class="pic_show"><img src="/images/movie_1.jpg"></div>
            <div class="info_list">
                <h2>无名之辈</h2>
                <p>观众评价<span class="grade">9.2</span></p>
                <p>主演：陈建斌，任素汐，潘斌龙</p>
                <p>2018-11-30上映</p>
            </div>
            <div class="btn_pre">
              预售
            </div>
        </li>
        <li>
            <div class="pic_show"><img src="/images/movie_2.jpg"></div>
            <div class="info_list">
                <h2>毒液：致命守护者</h2>
                <p>观众评价<sapn class="grade">9.3</sapn></p>
                <p>主演：汤姆 哈迪 米歇尔</p>
                <p>2018-11-30上映</p>
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
  name:'',
  data(){
   return {

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
