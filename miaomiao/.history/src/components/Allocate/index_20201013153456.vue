<template>
<div class="cinema_body">
    <Loading v-if="isLoading"/>
    <ul v-else>
        <li v-for="item in cinemaList" :key="item.id">
            <div>
                <span>{{item.name}}</span>
                <span class="q"><span class="price">{{item.price}}</span></span>
            </div>
            <div class="address">
                <span>{{item.address}}</span>
                <span>{{item.distance}}</span>
            </div>
            <div class="card">
                <div class="card" v-for="(num,index) in item.card" :key="index">
                    <div></div>
                </div>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name:'Allocate',
  data(){
   return {
       cinemaList:[],
       isLoading:true,
       prevCityId:-1
   };
  },
  mounted(){
      var cityId = this.$store.state.city.id;
      if(this.prevCityId === cityId){return;}
      this.isLoading = true;
      this.axios.get('/api2/cinemas/getinfo').then((res)=>{
          console.log(res.data);
          console.log(res.data.result);
          var msg = res.data.status;
          if(msg === 0){
              this.cinemaList = res.data.result;
              this.isLoading=false;
              this.prevCityId = cityId;
          }
          let cardList = new Array();
          for(let pre in this.cinemaList){
              cardList.push(this.cinemaList[pre].card);
          }
          console.log(cardList);
      })
  },
}
</script>

<style scoped>
#content .cinema_body{flex:1;overflow:auto;}
.cinema_body ul{padding:20px;}
.cinema_body li{border-bottom:1px solid #e6e6e6;margin-bottom:20px;}
.cinema_body div{margin-bottom:10px;}
.cinema_body .q{font-size:11px;color:#fc5407;display:block}
.cinema_body .price{font-size:18px;}
.cinema_body .address{font-size:13px;color:#666;}
.cinema_body .address span:nth-of-type(2){float:right;}
.cinema_body .card{display:flex;}
.cinema_body .card div{padding:0 3px;height:15px;line-height: 15px;border-radius: 2px;color:#f90;}
.or{color:#f90;border:1px solid #f90;}
.bl{color:#589daf;border:1px solid #589daf;}
</style>

