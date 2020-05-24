var {Email} = require('../untils/config.js');
var login = async(req,res,next)=>{

};
var register = async(req,res,next)=>{

};
var verify = async(req,res,next)=>{
    var email = req.query.email;
    let mailOptions = {
        from:'喵喵网 1035326098@qq.com',
        to: email,
        subject: '喵喵网邮箱验证码',
        text: '验证码'+Emile.verify
    }

};
var logout = async(req,res,next)=>{

};
var getUser = async(req,res,next)=>{

};
var findPassword = async(req,res,next)=>{

};

module.exports = {
    login,
    register,
    verify,
    logout,
    getUser,
    findPassword
}