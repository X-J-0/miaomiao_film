<template>
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
            <el-button size="small" type="danger" @click="handleToDeletes(scope.$index,scope.row._id)">删除</el-button>
        </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
  name:'',
  data(){
   return {
          tableData: []
   }
  },
  mounted(){
      this.axios.get('/api2/movies/getinfo').then(res=>{
          console.log(res);
      })
  }
}
</script>

<style scoped>

</style>
