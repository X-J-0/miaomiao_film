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
                    <input v-model="dec" class="admin_text" type="text" placeHolder="详情介绍">
                </div>
                <div>
                    <label for="file">电影图片:</label>
                    <input type="file" ref="file" v-on:change="handleFileUpload($event)">
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
                    <input v-model="dec" class="admin_text" type="text" placeHolder="详情介绍">
                </div>
                <div>
                    <label for="file">电影图片:</label>
                    <input type="file" ref="file" v-on:change="handleFileUpload($event)">
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
            <div v-if="isSearch">
            <ul>
                <li v-for="item in result" :key="item.id">
                    <div class="pic_show" ><img src='/images/qing.jpg'></div>
                    <div class="info_list">
                        <h2 >{{item.name}}</h2>
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
          isShow:false,
          isDis:true,
          isSearch:false
   }
  },
  methods:{
    getNum(index) {
        this.num = index;
    },
    handleFileUpload(event){
        event.preventDefault();
        this.file = this.$refs.file.files[0];
    },
    handleToAdd(){
            this.axios.post('/api2/admin/add',{
                name:this.name,
                remark:this.remark,
                actress:this.actress,
                times:this.times,
                dec:this.dec,
                file:this.file.name
              }).then((res) => {
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

    },
    handleToVerify(){
        this.isDis=false;
        this.isShow=true;
    },
    handleToSearch(){
           this.axios.post('/api2/admin/getname',{
               name:this.name
           }).then((res)=>{
           var status = res.data.status;
           if(status == 0 && res.data.result!=null){
               console.log(res.data);
               this.movieList = res.data.data.result;
               this.isSearch = true;
           }else{
               alert('没找到');
           }
       })
    },
    handleFileUpload(event){
        event.preventDefault();
        this.file = this.$refs.file.files[0];
        console.log(this.file);
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
    body {
      height: 100%;
      margin: 0;
      padding: 0;
      background-color: #58596b;
    }

    .active {
      color: #fff;
      background: #e74c3c;
    }

    .main {
      width: 100%;
      height: 100%;
      background-color: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .1); 
    }

    .menuList {
      width: 100%;
      height: 60px;
      background-color: #33344a;
    }

    ul {
      width: 100%;
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      color: #717181;
      font-size: 16px;
      line-height: 60px;
    }

    ul li {
      flex: 1;
      text-align: center;
      cursor: pointer;
    }

    .tabCon {
      width: 100%;
      padding: 40px 20px;
      color: #999;
      font-size: 14px;
      background-color: #fff;
    }
.tabCon .admin_body{width:100%;}
.admin_body .admin_text{width:100%;height:40px;border:none;border-bottom:1px #ccc solid;margin-bottom:5px;outline:none;text-indent:10px;}
.admin_body .admin_btn{height:50px;margin-top:15px;}
.admin_body .admin_btn input{width:100%;height:100%;background-color:#e54847;border-radius: 3px;border:none;display:block;color:white;font-size:20px;}
.admin_body .admin_link{display: flex;justify-content: space-between;}
.admin_body .admin_link a{text-decoration: none;margin:0 5px;font-size:12px;color:#e54847;}
.verify{position:absolute;top:100px;right:10px;height:30px;background-color: #e54847;border-radius: 3px;border:none;padding:5px;color:white;}
</style>
