<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li>上海</li>
          <li>北京</li>
          <li>上海</li>
          <li>北京</li>
          <li>上海</li>
          <li>北京</li>          
          <li>上海</li>
          <li>北京</li>
        </ul>
      </div>
      <div class="city_sort">
        <div>
          <h2>A</h2>
          <ul>
            <li>阿拉善盟</li>
            <li>鞍山</li>
            <li>安庆</li>
            <li>安阳</li>
          </ul>
        </div>
          <div>
            <h2>B</h2>
            <ul>
              <li>北京</li>
              <li>保定</li>
              <li>蚌埠</li>
              <li>包头</li>
            </ul>
          </div>
          <div>
          <h2>A</h2>
          <ul>
            <li>阿拉善盟</li>
            <li>鞍山</li>
            <li>安庆</li>
            <li>安阳</li>
          </ul>
        </div>
          <div>
            <h2>B</h2>
            <ul>
              <li>北京</li>
              <li>保定</li>
              <li>蚌埠</li>
              <li>包头</li>
            </ul>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'City',
  data(){                                                                                                                                                                                                                                                                                                                                                                                                                    
   return {

   }
  }
}
</script>

<style scoped>
#content .city_body{margin-top:45px;display:flex;width:100%;position:absolute;top:0;bottom:0;}
.city_body .city_list{flex:1;overflow:auto;background-color: #fff;}
.city_body .city_list::webkit_scrollbar{
  background-color: transparent;
  width:0;
}
.city_body .city_hot{margin-top:20px;}
.city_body .city_hot h2{padding-left:15px;line-height: 30px;font-size:14px;background-color: #fff;font-weight: normal;}
/* .city_body .city_hot ul{} */
.city_body .city_hot ul li{float:left;background-color: #fff;width:29%;height:33px;margin-top:15px;margin-left:3%;padding:0 4px;border:1px solid #e6e6e6}
/* .city_body .city_sort{} */
.city_body .city_sort div{margin-top:20px;}
.city_body .city_sort h2{padding-left:15px;line-height: 30px;font-size:14px;background-color: #fff;font-weight: normal;}
.city_body .city_sort ul{padding-left:10px;margin-top:10px;}
.city_body .city_sort ul li{line-height: 30px;line-height: 30px;}
.city_body .city_index{width:20px;display:flex;flex-direction: column;justify-content: center;text-align: center;border-left:1px #e6e6e6 solid}
</style>
