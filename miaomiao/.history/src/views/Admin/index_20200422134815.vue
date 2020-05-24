<template>
    <div class="main">
        <div class="menuList">
        <ul>
            <li v-for="(item,index) in list" :key="item.id" :class="{active:num==index}" @click="getNum(index)">
            {{item}}
            </li>
        </ul>
        </div>
        <div class="tabCon">
        <div v-show="0 == num">
            <div class="admin_body">
                <div>
                    <input v-model="name" class="admin_text" type="text" placeHolder="电影名称">
                </div>
                <div>
                    <input v-model="remark" class="admin_text" type="text" placeHolder="观众评价">
                </div>
                <div>
                    <input v-model="actress" class="admin_text" type="text" placeHolder="主演">
                </div>
                <div>
                    <input v-model="times" class="admin_text" type="text" placeHolder="播放次数">
                </div>
                <div>
                    <textarea v-model="dec" class="admin_text" placeHolder="详情介绍"></textarea>
                </div>
                <div>
                    <label for="file">电影图片:</label>
                    <input type="file" ref="file" @change="handleFileUpload"> 
                </div>
                <div class="admin_btn">
                    <input type="submit" value="增加" @click="handleToAdd">
                </div>
            </div>
        </div>
        <div v-show="1 == num">
            <div class="admin_body">
                <div>
                    <input v-model="name" class="admin_text" type="text" placeHolder="请输入要删除的电影名称">
                </div>
                <div class="admin_btn">
                    <input type="submit" value="删除" @click="handleToRemove">
                </div>
            </div>
        </div>
        <div v-show="2 == num">
            <div class="admin_body">
                <div v-if="isDis">
                    <input v-model="name" class="admin_text" type="text" placeHolder="请输入要修改的电影名称">
                    <button @click="handleToVerify" class="verify">确定</button>
                </div>
                <div v-if="isShow">
                <div>
                    <input v-model="name" class="admin_text" type="text" placeHolder="电影名称">
                </div>
                <div>
                    <input v-model="remark" class="admin_text" type="text" placeHolder="观众评价">
                </div>
                <div>
                    <input v-model="actress" class="admin_text" type="text" placeHolder="主演">
                </div>
                <div>
                    <input v-model="times" class="admin_text" type="text" placeHolder="播放次数">
                </div>
                <div>
                    <textarea v-model="dec" class="admin_text" placeHolder="详情介绍"></textarea>
                </div>
                <div>
                    <label for="file">电影图片:</label>
                    <input type="file" ref="file" @change="handleFileUpload"> 
                </div>
                </div>
                <div class="admin_btn">
                    <input type="submit" value="修改" @click="handleToChange">
                </div>
            </div>
        </div>
        <div v-show="3 == num">
            <div class="admin_body">
                <div>
                    <input v-model="name" class="admin_text" type="text" placeHolder="请输入要查询的电影名称">
                </div>
                <div class="admin_btn">
                    <input type="submit" value="搜索" @click="handleToSearch">
                </div>
            </div>
            <div v-if="isSearch" class="movie_body">
            <ul>
                <li>
                    <div class="pic_show" ><img src='/images/movie_1.jpg'></div>
                    <div class="info_list">
                        <h2 >{{movieList.name}}</h2>
                        <p>观众评价<span class="grade">{{movieList.remark}}</span></p>
                        <span>主演：{{movieList.actress}}</span>
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
                <div class="pic_show"><img src="/images/Movie_1.jpg"></div>
                <div class="info_list">
                    <h2>{{item.name}}</h2>
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
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
import {messageBox} from '@/components/JS'
export default {
  name:'',
  data(){
   return {
          num: 0,
          list: ["增加", "删除", "修改","查看"],
          name:'',
          remark:'',
          actress:'',
          times:'',
          dec:'',
          file:'',
          movieList:'',
          movieLists:'',
          isShow:false,
          isDis:true,
          isSearch:false,
          isAppeal:true
   }
  },
  mounted(){
    this.axios.get('/api2/admin/getinfo').then((res) => {
        var status = res.data.status;
        if(status === 0){
            this.movieLists = res.data.result;
            console.log(this.movieLists);
        }
    })
  },
  methods:{
    getNum(index) {
        this.num = index;
    },
    handleFileUpload(){
        this.file = this.$refs.file.files[0].name;
        // console.log(this.file);
        // console.log(this.$refs.file.files[0].name);
    },
    handleToAdd(){
            this.axios.post('/api2/admin/add',{
                name:this.name,
                remark:this.remark,
                actress:this.actress,
                times:this.times,
                dec:this.dec,
                pic:this.file
              }).then((res) => {
                console.log(this.file);
                var status = res.data.status;
                if(status === 0){
                messageBox({
                title:'添加成功',
                content:'',
                cancel:'',
                ok:'确定',
                handleOk(){
                    window.location.reload();
                }
                
                })
                }else{
                messageBox({
                title:'添加失败',
                content:'',
                cancel:'',
                ok:'确定',
                handleOk(){
                    window.location.reload();
                }
                });
                }
    });
    },
    handleToRemove(){
    this.axios.post('/api2/admin/remove',{
                name:this.name,
              }).then((res) => {
            var status = res.data.status;
            if(status === 0){
              messageBox({
              title:'删除成功',
              ok:'确定',
              handleOk(){
                window.location.reload();
              }             
            })
            }else{
              messageBox({
              title:'删除失败',
              ok:'确定',
              handleOk(){
                window.location.reload();
              }
             });
            }
                });
    },
    handleToChange(){
    this.axios.post('/api2/admin/change',{
                name:this.name,
                remark:this.remark,
                actress:this.actress,
                times:this.times,
                dec:this.dec,
                pic:this.file
              }).then((res) => {
                console.log(this.file);
                var status = res.data.status;
                if(status === 0){
                messageBox({
                title:'修改成功',
                content:'',
                cancel:'',
                ok:'确定',
                handleOk(){
                    window.location.reload();
                }
                
                })
                }else{
                messageBox({
                title:'修改失败',
                content:'',
                cancel:'',
                ok:'确定',
                handleOk(){
                    window.location.reload();
                }
                });
                }
    });
    },
    handleToVerify(){
        this.axios.post('/api2/admin/getname',{
               name:this.name
           }).then((res)=>{
           var status = res.data.status;
           if(status == 0 && res.data.result!=null){
                this.isDis=false;
                this.isShow=true;
                this.remark = res.data.result[0].remark;
                this.actress = res.data.result[0].actress;
                this.times = res.data.result[0].times;
                this.dec = res.data.result[0].dec;
                this.file = res.data.result[0].pic;
           }else{
               alert('没找到');
           }
       })
    },
    handleToSearch(){
           this.axios.post('/api2/admin/getname',{
               name:this.name
           }).then((res)=>{
           var status = res.data.status;
           if(status == 0 && res.data.result!=null){
               this.movieList = res.data.result[0];
               this.isSearch = true;
           }else{
               alert('没找到');
           }
       })
    },
  },
  beforeRouteEnter (to, from, next) {
    axios.get('/api2/admin').then((res)=>{
      var status = res.data.status;
      if(status === 0){
        next();
      }else{
        next('/mine/login');
      }
    });
  }
}
</script>

<style scoped>
html,
body {height: 100%;margin: 0;padding: 0;background-color: #58596b;}
.active {color: #fff;background: #e74c3c;}
.main {width: 100%;height: 100%;background-color: #fff;box-shadow: 0 1px 3px rgba(0, 0, 0, .1); }
.menuList {width: 100%;height: 60px;background-color: #33344a;}
ul {width: 100%;display: flex;list-style: none;padding: 0;margin: 0;color: #717181;font-size: 16px;line-height: 60px;}
ul li {flex: 1;text-align: center;cursor: pointer;}
.tabCon {width: 100%;padding: 40px 20px;color: #999;font-size: 14px;background-color: #fff;  }
.tabCon .admin_body{width:100%;}
.admin_body .admin_text{width:100%;height:40px;border:none;border-bottom:1px #ccc solid;margin-bottom:5px;outline:none;text-indent:10px;margin-right: 20px;}
.admin_body .admin_btn{height:50px;margin-top:15px;margin-right: 20px;}
.admin_body .admin_btn input{width:100%;height:100%;background-color:#e54847;border-radius: 3px;border:none;display:block;color:white;font-size:20px;}
.admin_body .admin_link{display: flex;justify-content: space-between;}
.admin_body .admin_link a{text-decoration: none;margin:0 5px;font-size:12px;color:#e54847;}
.verify{position:absolute;top:100px;right:10px;height:30px;background-color: #e54847;border-radius: 3px;border:none;padding:5px;color:white;}
.movie_body{width:100%;flex:1;overflow:hidden;}
.movie_body ul{margin:0 12px; overflow:hidden;}
.movie_body ul li{margin-top:12px;display:flex;align-items:center;border-bottom:1px solid #e6e6e6;padding-bottom:10px;}
.movie_body .pic_show{width:64px; height:90px;}
.movie_body .pic_show img{width:100%;}
.movie_body .info_list{margin-top:50px;margin-left:10px;flex:1;position: relative;}
.movie_body .info_list h2{font-size:17px;line-height: 24px;width:150px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-left: -40px;}
.movie_body .info_list p{font-size:13px;color:#666;line-height: 22px;width:200px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-left: -60px;}
.movie_body .info_list span{font-size:13px;color:#666;line-height: 22px;width:200px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-left: -60px;}
.movie_body .info_list .grade{font-weight: 700;color:#faaf00;font-size:15px;}
.pic_show img{width:50px;position: relative;right:10px;top:20px;}
.movie_body .btn_pre{width:60px;height:27px;line-height: 28px;text-align: center;background-color: #f03d37;color:#fff;border-radius: 5%;margin-right: 60px;}
.movie_bodys{width:100%;flex:1;overflow:hidden;}
.movie_bodys ul{margin:0 12px; overflow:hidden;float:none}
.movie_bodys ul li{margin-top:12px;display:flex;align-items:center;border-bottom:1px solid #e6e6e6;padding-bottom:10px;}
.movie_bodys .pic_show{width:64px; height:90px;}
.movie_bodys .pic_show img{width:100%;}
.movie_bodys .info_list{margin-top:50px;margin-left:10px;flex:1;position: relative;}
.movie_bodys .info_list h2{font-size:17px;line-height: 24px;width:150px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-left: -40px;}
.movie_bodys .info_list p{font-size:13px;color:#666;line-height: 22px;width:200px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-left: -60px;}
.movie_bodys .info_list .grade{font-weight: 700;color:#faaf00;font-size:15px;}
.pic_show img{width:50px;position: relative;right:10px;top:20px;}
.movie_bodys .btn_pre{width:60px;height:27px;line-height: 28px;text-align: center;background-color: #f03d37;color:#fff;border-radius: 5%;margin-right: 60px;}
.file-box{ position: relative;width:340px;margin:20px;}
.txt{ height:28px;line-height:28px; border:1px solid #cdcdcd; width:180px;}
.btn{width:70px; color:#fff;background-color:#3598dc; border:0 none;height:28px; line-height:16px!important;cursor:pointer;}
.btn:hover{background-color:#63bfff;color:#fff;}
.file{ position:absolute; top:0; right:-180px; height:30px;line-height:30px;}
</style>
