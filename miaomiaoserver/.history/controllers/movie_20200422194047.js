var MovieModel = require('../models/movies.js');
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
var getDetail = async(req,res,next)=>{
    var {_id} = req.body;
    var result = await MovieModel.find({_id});
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
var getDetail = async(req,res,next)=>{
    var {name} = req.body;
    var result = await MovieModel.find({name});
    if(result){
        res.send({
            msg:'已得到电影数据',
            result:result,
            status:0
        })
        console.log(result)
    }else{
        res.send({
            msg:'获取电影信息失败',
            status:-2
        })   
    }
}
module.exports = {
    getInfo,
    getDetail,
    getName
};