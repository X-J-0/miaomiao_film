var MovieModel = require('../models/movies.js');
var CinemaModel = require('../models/cinema.js');
var add = async(req,res,next)=>{
    var {name,remark,actress,times,dec,pic}=req.body;
    pic = '/images/'+pic;
    var result = await MovieModel.save({
        name,
        remark,
        actress,
        times,
        dec,
        pic
    });
    console.log(result);
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
var CinemaAdd = async(req,res,next)=>{
    var {name,price,card,address,distance}=req.body;
    pic = '/images/'+pic;
    var result = await CinemaModel.save({
        name,
        price,
        card,
        address,
        distance
    });
    console.log(result);
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
    var result = await MovieModel.remove({name});
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
var CinemaRemove = async(req,res,next)=>{
    var {name} = req.body;
    console.log(name);
    var result = await CinemaModel.remove({name});
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
var getName = async(req,res,next)=>{
    var {name} = req.body;
    var result = await MovieModel.find({name});
    if(result){
        res.send({
            msg:'已得到电影数据',
            result:result,
            status:0
        })
    }else{
        res.send({
            msg:'获取电影信息失败',
            status:-2
        })   
    }
}
var CinemaGetName = async(req,res,next)=>{
    var {name} = req.body;
    var result = await CinemaModel.find({name});
    if(result){
        res.send({
            msg:'已得到电影数据',
            result:result,
            status:0
        })
    }else{
        res.send({
            msg:'获取电影信息失败',
            status:-2
        })   
    }
}
var getInfo = async(req,res,next)=>{
    var result = await MovieModel.find();
    if(result){
        res.send({
            msg:'已得到所有电影数据',
            result:result,
            status:0
        })
    }else{
        res.send({
            msg:'获取电影信息失败',
            status:-2
        })   
    }
}
var CinemaGetInfo = async(req,res,next)=>{
    var result = await CinemaModel.find();
    if(result){
        res.send({
            msg:'已得到所有电影数据',
            result:result,
            status:0
        })
    }else{
        res.send({
            msg:'获取电影信息失败',
            status:-2
        })   
    }
}
var change = async(req,res,next)=>{
    var {name,remark,actress,times,dec,pic}=req.body;
    pic = '/images/'+pic;
    var result = await MovieModel.update({
        name,
        remark,
        actress,
        times,
        dec,
        pic
    });
    if(result){
        res.send({
            msg:'修改成功',
            status:0
        })
    }else{
        res.send({
            msg:'修改失败',
            status:-2        
        });
    }
}
var CinemaChange = async(req,res,next)=>{
    var {name,price,card,address,distance}=req.body;
    console.log(1);
    var result = await CinemaModel.update({
        name,
        price,
        card,
        address,
        distance
    });
    if(result){
        res.send({
            msg:'修改成功',
            status:0
        })
    }else{
        res.send({
            msg:'修改失败',
            status:-2        
        });
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
    remove,
    change,
    getName,
    getInfo,
    CinemaAdd,
    CinemaRemove,
    CinemaGetName,
    CinemaGetInfo,
    CinemaChange
};