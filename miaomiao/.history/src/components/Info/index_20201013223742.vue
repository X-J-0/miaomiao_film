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
            <el-button size="small" @click="handleToChanges(scope.$index,scope.row._id)">修改信息</el-button>
            <el-button size="small" type="danger" @click="handleToRemove(scope.$index,scope.row.name)">删除</el-button>
        </template>
        </el-table-column>
    </el-table>      
    <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
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
        <input type="submit" v-if="isShow" value="修改" @click="handleToChange">
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
          dialogVisible: false
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
    handleToChanges(index,id){
        this.dialogVisible = true;
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

              })
  }
  }
}
</script>

<style scoped>

</style>
