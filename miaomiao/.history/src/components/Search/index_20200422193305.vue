<template>
  <div class="search_body">
    <div class="search_input">
      <div class="search_input_wrapper">
        <i class="iconfont icon sousuo"></i>
        <input type="text" v-model="message" @input="handleChange">
      </div>
    </div>
    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
      <ul>
        <li v-for="item in moviesList" :key="item.id">
          <div class="img"><img :src="item.pic |setWH('128.180')"></div><a href=""></a>
          <div class="info">
            <p><span>{{item.name}}</span><span>{{item.remark}}</span></p>
            <p>{{item.actress}}</p>
            <p>{{item.times}}</p>
            <!-- <p>{{item.rt}}</p> -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'Search',
  data(){
   return {
      message:'',
      moviesList:[],
      timeout:null
   }
  },
  methods:{
    cancelRequest(){
      if(typeof this.source === 'function'){
        this.source('终止请求')
      }
    },
    handleChange(){
      this.timeout = setTimeout(()=>{
        this.axios.post('/api2/movies/getname').then((res)=>{
           var status = res.data.status;
           console.log(status);
           if(status == 0){
               this.movieList = res.data.result;
               console.log(this.movieList)
           }
       })
      },300)
    }
  },
  // watch:{
  //   message(newVal){
  //     var that = this;
  //     var cityId = this.$store.state.city.id;
  //     this.cancelRequest();
  //     this.axios.post('/api2/movies/getname',{
  //         name:this.message
  //     },{
  //       cancelToken: new this.axios.CancelToken(function(c){
  //         that.source = c;
  //       })
  //     }).then((res)=>{
  //       var status = res.data.status;
  //       var movies = res.data.result;
  //       if(status && movies){
  //         this.moviesList = res.data.result;
  //       }
  //     }).catch((err)=>{
  //       if(this.axios.isCancel(err)){
  //         console.log('Request canceled',err.message);
  //       }else{
  //         console.log(err);
  //       }
  //     });
  //   }
  // }
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
</style>
