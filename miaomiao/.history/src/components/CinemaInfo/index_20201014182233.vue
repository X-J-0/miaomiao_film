<template>
<div>
    <el-table
      :data="tableData"
      style="width: 100%">
        <el-table-column
        prop="name"
        label="影院名">
        </el-table-column>
        <el-table-column
        prop="price"
        label="影院价格">
        </el-table-column>
        <el-table-column
        prop="card"
        label="优惠活动"
         :formatter="fileData">
        </el-table-column>
        <el-table-column
        prop="address"
        label="影院地址">
        </el-table-column>
        <el-table-column
        prop="distance"
        label="距离">
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
                    <el-form>
                    <el-form-item label="影院名称">
                    <el-input
                    class="el-input"
                    placeholder="影院名称"
                    v-model="name"
                    clearable>
                    </el-input>
                    </el-form-item>
                    <el-form-item label="优惠活动">
                    <el-input
                    class="el-input"
                    placeholder="优惠活动"
                    v-model="card"
                    clearable>
                    </el-input>
                    </el-form-item>
                    <el-form-item label="影院地址">
                    <el-input
                    class="el-input"
                    placeholder="影院地址"
                    v-model="address"
                    clearable>
                    </el-input>
                    </el-form-item>
                    <el-form-item label="距离">
                    <el-input
                    class="el-input"
                    placeholder="距离"
                    v-model="distance"
                    clearable>
                    </el-input>
                    </el-form-item>
                    <el-form-item label="影院价格">
                    <el-input
                    class="el-input"
                    placeholder="影院价格"
                    v-model="price"
                    clearable>
                    </el-input>
                    </el-form-item>
                </el-form>
</div>
    <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleToChange">确 定</el-button>
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
          price:'',
          card:'',
          address:'',
          distance:''
   }
  },
  mounted(){
      this.axios.get('/api2/cinemas/cinemagetinfo').then(res=>{
          console.log(res);
          if(res.data.status == 0){
              this.tableData = res.data.result;
          }
      })
  },
  methods:{
      fileData(row){      
      let arr = []
      row.card.forEach((item, index)=>{
        // if (index > 2) {
        //   return
        // }
        arr.push(item);
      })
      return arr.join(',')
    },
    handleToRemove(index,name){
    this.axios.post('/api2/admin/Cinemaremove',{
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
        console.log(name);
        this.axios.post('/api2/admin/Cinemagetname',{
               name:name
           }).then((res)=>{
           console.log(res);
           var status = res.data.status;
           console.log(res.data.result[0].card);
           if(res.data.result.length!=0 && status === 0){
                this.price = res.data.result[0].price;
                this.name = res.data.result[0].name;
                this.card= res.data.result[0].card.join(',');
                this.address = res.data.result[0].address;
                this.distance = res.data.result[0].distance;
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
    this.dialogVisible = false;
    console.log(this.card.join(','));
    this.axios.post('/api2/admin/Cinemachange',{
                name:this.name,
                card:this.card,
                price:this.price,
                adress:this.adress,
                distance:this.distance,
              }).then((res) => {
                  console.log(res);
                  if(res.data.status == 0){
                      this.$message({
                          type:"success",
                          message:'修改成功'
                      })
                  }else{
                      this.$message({
                          type:"error",
                          message:'修改失败'
                      })
                  }
              })
  }
  }
}
</script>

<style scoped>

</style>
