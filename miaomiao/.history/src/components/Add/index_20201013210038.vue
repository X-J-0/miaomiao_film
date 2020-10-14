<template>
<div>
    <div class="admin_body">
                <div>
                    <el-input
                    class="el-input"
                    placeholder="电影名称"
                    v-model="name"
                    clearable>
                    </el-input>
                </div>
                <div>
                    <el-input
                    class="el-input"
                    placeholder="观众评价"
                    v-model="remark"
                    clearable>
                    </el-input>
                </div>
                <div>
                    <el-input
                    class="el-input"
                    placeholder="主演"
                    v-model="actress"
                    clearable>
                    </el-input>
                </div>
                <div>
                    <el-input
                    class="el-input"
                    placeholder="播放次数"
                    v-model="times"
                    type="number"
                    clearable>
                    </el-input>
                </div>
                <div>
                    <el-input
                    class="el-input"
                    type="textarea"
                    :rows="2"
                    placeholder="详情介绍"
                    v-model="dec">
                    </el-input>
                </div>
                <div>
                    <!-- <label for="file">电影图片:</label>
                    <input type="file" ref="file" @change="handleFileUpload">  -->
                    <el-upload
                    class="upload-demo"
                    action=""
                    :auto-upload=false
                    :before-upload="handleFileUpload">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </div>
                    <el-button class="admin_btn" type="primary" @click="handleToAdd">增加</el-button>
            </div>
</div>

</template>

<script>
export default {
  name:'',
  data(){
   return {
          name:'',
          remark:'',
          actress:'',
          times:'',
          dec:'',
          file:'',
   }
  },
  methods:{
          handleFileUpload(file){
              console.log(file);
            // this.file = this.$refs.file.files[0].name;
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
  }
}
</script>

<style scoped>
html,
body {height: 90%;margin: 0;padding: 0;background-color: #58596b;}
.admin_btn{float:right;margin-right:10px;}
.el-input{
    margin-bottom:10px;
}
</style>
