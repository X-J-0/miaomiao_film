<template>
    <footer id="footer">
        <ul>
            <li>
                <!-- <i class="iconfont icon-dianying"></i> -->
                <p>电影</p>
            </li>
            <li class="active">
                <!-- <i class="iconfont icon-yingyuan"></i> -->
                <p>影院</p>
            </li>
                <li>
                <!-- <i class="iconfont icon-dianying"></i> -->
                <p>我的</p>
            </li>
        </ul>
    </footer>
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
#footer{width:100%; height:50px;background-color: #fff;border-top:2px #ebe8e3 solid;position:fixed;left:0;bottom:0;}
#footer ul{display:flex;text-align: center;height:50px;align-items:center;}
#footer ul li{flex:1;height:40px;}
#footer ul li.active{color:#f03d37;}
#footer ul i{font-size:20px;}
#footer ul p{font-size:12px;line-height:18px;}
</style>
