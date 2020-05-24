var MovieModel = require('../models/movies.js');
var add = async(req,res,next)=>{
    var {name,remark,actress,times,dec,file}=req.body;
    var result = await MovieModel.save({
        name,
        remark,
        actress,
        times,
        dec,
        file
    });
    if(result){
        res.send({
            msg:'添加成功',
            status:0
        })
    }else{
        res.send({
            msg:'添加失败',
            status:-2        
        });
    }
}