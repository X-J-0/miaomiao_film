<template>
<div>
    <el-table
      :data="tableData"
      style="width: 100%">
        <el-table-column
        label="电影图片"
        >
        　　<template slot-scope="scope">
　　　　      <img :src="scope.row.pic"  width="80px" height="120px"/>
        　　</template>
        </el-table-column>
        <el-table-column
        prop="name"
        label="电影名">
        </el-table-column>
        <el-table-column
        prop="price"
        label="电影价格">
        </el-table-column>
        <el-table-column
        prop="remark"
        label="电影评价">
        </el-table-column>
        <el-table-column
        prop="times"
        label="播放次数">
        </el-table-column>
        <el-table-column
        prop="dec"
        label="电影描述">
        </el-table-column>
        <el-table-column
        prop="action"
        label="操作">
        <template slot-scope="scope">
            <el-button size="small" @click="handleToChanges(scope.row.name,scope.row._id)">修改信息</el-button>
            <el-button size="small" type="danger" @click="handleToRemove(scope.$index,scope.row.name)">删除</el-button>
        </template>
        </el-table-column>
    </el-table>      
    <el-dialog
    title="修改信息"
    :visible.sync="dialogVisible"
    width="30%">
    <div class="admin_body">
                <div>
                    <!-- <lable>电影名称</lable> -->
                    <el-input
                    class="el-input"
                    placeholder="电影名称"
                    v-model="name"
                    :lable="电影名称"
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
                    placeholder="电影价格"
                    v-model="price">
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
                    <label for="file">电影图片:</label>
                    <input  class="button" type="file" ref="file" @change="handleFileUpload">
                </div>
    <div class="admin_btn">
        <input type="submit" value="修改" @click="handleToChange">
    </div>
</div>
    <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
    </el-dialog>  
</div>
</template>

<script>
export default {
  name:'',
  data(){
   return {
          tableData: [],
          dialogVisible: false,
          id:'',
          name:'',
          remark:'',
          times:'',
          dec:'',
          file:'',
          price:'',
          actress:''

   }
  },
  mounted(){
      this.axios.get('/api2/movies/getinfo').then(res=>{
          console.log(res);
          if(res.data.status == 0){
              this.tableData = res.data.result;
          }
      })
  },
  methods:{
    handleFileUpload(){
        this.file = this.$refs.file.files[0].name;
    },
    handleToRemove(index,name){
    this.axios.post('/api2/admin/remove',{
                name:name,
            }).then((res) => {
            console.log(res);
            var status = res.data.status;
            if(status === 0){
            this.$message({
               type:"success",
               message:"删除成功"       
            })
            this.tableData.splice(index,1);
            }else{
              this.$message({
              message:'删除失败',
              type:'error'
             });
            }
            });
    },
    handleToChanges(name,id){
        this.dialogVisible = true;
        this.id = id;
        console.log(name)
        this.axios.post('/api2/admin/getname',{
               name:name
           }).then((res)=>{
               console.log(res);
           var status = res.data.status;
           if(res.data.result.length!=0 && status === 0 && this.name!={}){
                this.isDis=false;
                this.isShow=true;
                this.price = res.data.result[0].price;
                this.name = res.data.result[0].name;
                this.remark = res.data.result[0].remark;
                this.actress = res.data.result[0].actress;
                this.times = res.data.result[0].times;
                this.dec = res.data.result[0].dec;
                this.file = res.data.result[0].pic;
           }else{
                this.dialogVisible = false;
               this.$message({
                   type:"error",
                   message:"出现故障了..."
               })
           }
       })
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
                  console.log(res);
              })
  }
  }
}
</script>

<style scoped>

</style>
