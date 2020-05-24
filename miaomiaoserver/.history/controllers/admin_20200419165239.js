var MovieModel = require('../models/movies.js');
var add = async(req,res,next)=>{
    var {name,remark,actress,times,dec,pic}=req.body;
    var result = await MovieModel.save({
        name,
        remark,
        actress,
        times,
        dec,
        pic
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
var remove = async(req,res,next)=>{
    var {name} = req.body;
    console.log(name);
    var result = await MovieModel.remove(name);
    if(result){
        res.send({
            msg:'删除成功',
            status:0
        })
    }else{
        res.send({
            msg:'删除失败',
            status:-2
        })
    }
}
var index = async(req,res,next)=>{
    res.send({
        msg:'管理员权限',
        status:0
    });
}
module.exports = {
    index,
    add,
    remove
};