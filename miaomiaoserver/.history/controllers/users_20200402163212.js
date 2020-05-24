var {Email} = require('../untils/config.js');
var UserModel = require('../models/users.js');
var login = async(req,res,next)=>{
    var {username,password} = req.body;
    var result = await UserModel.findLogin({
        username,
        password
    });
    if(result){
        req.session.username = username;
        res.send({
            msg:'登录成功',
            status:0
        })
    }else{
        res.send({
            msg:'登陆失败',
            status:-1
        });
    }
};
var register = async(req,res,next)=>{
    var {username,password,email,verify} = req.body;
    if(email !== req.session.email || verify !== req.session.verify){
        res.send({
            msg:'验证码错误',
            status:-1
        })
    }
    var result = await UserModel.sava({
        username,
        password,
        email
    });
    if(result){
        res.send({
            msg:'注册成功',
            status:0
        })
    }else{
        res.send({
            msg:'注册失败',
            status:-2
        })
    }
};
var verify = async(req,res,next)=>{
    var email = req.query.email;
    var verify = Email.verify;
    req.session.verify = verify;
    req.session.email = email;
    let mailOptions = {
        from:'喵喵网 1035326098@qq.com',
        to: email,
        subject: '喵喵网邮箱验证码',
        text: '验证码'+Emile.verify
    }
    var info = await Email.transporter.sendMail(mailOptions,(err)=>{
        if(err){
            res.send({
                msg:'验证码发送失败',
                status:-1
            });
        }else{
            res.send({
                msg:'验证码发送成功',
                status:0
            });
    }
    });
};
var logout = async(req,res,next)=>{
    res.session.username = '';
    res.send({
        msg:"退出成功",
        status:0
    });
};
var getUser = async(req,res,next)=>{
    if(req.session.username){
        res.send({
            msg:'获取用户信息成功',
            status:0,
            data:{
                username:req.session.username
            }
        });
    }else{
        res.send({
            msg:"获取用户信息成功",
            status:-1
        })
    }
};
var findPassword = async(req,res,next)=>{
    var {email,password,verify} = req.body;
    if(email === req.session.email && verify === req.session.verify){
        var result = await UserModel.findPassword(email,password);
        if(result){
            res.send({
                msg:'修改密码成功',
                status:0
            });
        }else{
            res.send({
                msg:'修改密码失败',
                status:-1
            });
        }
    }else{
        res.send({
            msg:"验证码失败",
            status:-1
        });
    }
};

module.exports = {
    login,
    register,
    verify,
    logout,
    getUser,
    findPassword
}