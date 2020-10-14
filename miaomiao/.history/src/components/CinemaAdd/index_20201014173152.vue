<template>
<div>
    <div class="admin_body">
                <div>
                    <el-input
                    class="el-input"
                    placeholder="影院名称"
                    v-model="name"
                    clearable>
                    </el-input>
                </div>
                <div>
                    <el-input
                    class="el-input"
                    placeholder="影院价格"
                    v-model="price"
                    clearable>
                    </el-input>
                </div>
                <div>
                    <el-input
                    class="el-input"
                    placeholder="优惠活动"
                    v-model="card"
                    clearable>
                    </el-input>
                </div>
                <div>
                    <el-input
                    class="el-input"
                    placeholder="影院地址"
                    v-model="address"
                    clearable>
                    </el-input>
                </div>
                <div>
                    <el-input
                    class="el-input"
                    placeholder="距离"
                    v-model="distance"
                    type="number"
                    clearable>
                    </el-input>
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
          card:'',
          price:'',
          address:'',
          distance:'',
   }
  },
  methods:{
          handleToAdd(){
            this.axios.post('/api2/admin/Cinemaadd',{
                name:this.name,
                price:this.price,
                address:this.address,
                distance:this.times,
                card:this.card,
              }).then((res) => {
                console.log(res);

                var status = res.data.status;
                if(status === 0){
                this.message({
                    type:'success',
                    message:'添加成功'
                })
                    window.location.reload();
                }else{
                this.$message({
                    type:'error',
                    message:'添加失败'
                })
                    window.location.reload();
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
.button input{
    width:80px;
    height:28px;
    background-color: rgb(0, 153, 255);
    color:white;
}
</style>
