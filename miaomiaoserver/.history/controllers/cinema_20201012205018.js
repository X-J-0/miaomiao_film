var CinemaModel = require('../models/cinema.js');
var getInfo = async(req,res,next)=>{
    var result = await CinemaModel.find();
    if(result){
        res.send({
            msg:'已得到所有影院数据',
            result:result,
            status:0
        })
    }else{
        res.send({
            msg:'获取影院信息失败',
            status:-2
        })   
    }
}
var getDetail = async(req,res,next)=>{
    var {_id} = req.body;
    var result = await CinemaModel.find({_id});
    if(result){
        res.send({
            msg:'已得到影院数据',
            result:result,
            status:0
        })
    }else{
        res.send({
            msg:'获取影院信息失败',
            status:-2
        })   
    }
}
var getName = async(req,res,next)=>{
    var {name} = req.body;
    var result = await CinemaModel.find({name});
    if(result){
        res.send({
            msg:'已得到影院数据',
            result:result,
            status:0
        })
    }else{
        res.send({
            msg:'获取影院信息失败',
            status:-2
        })   
    }
}
module.exports = {
    getInfo,
    getDetail,
    getName
};