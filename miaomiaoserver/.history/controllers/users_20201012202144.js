var {Email} = require('../untils/config.js');
var UserModel = require('../models/users.js');
var {setCrypto,createVerify} = require('../untils/base');

var a;
var b;
var login = async(req,res,next)=>{
    var {username,password} = req.body;
    var result = await UserModel.findLogin({
        username,
        password : setCrypto(password)
    });
    if(result){
        req.session.username = username;   
        req.session.admin = result.admin;    
        res.send({
            msg:'登录成功',
            status:0
        })
    }else{
        res.send({
            msg:'用户不存在或密码错误',
            status:-1
        });
    }
};
var register = async(req,res,next)=>{
    var {username,password,email,verify} = req.body;
    if(email !== b || verify !== a){
        res.send({
            msg:'验证码错误',
            status:-1
        })
    }

    if((Email.time - req.session.time)/1000 > 60){
        res.send({
            msg:'验证码已过期',
            status : -3
        });
        return;
    }

    var result = await UserModel.save({
        username,
        password : setCrypto(password),
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
        });
}
}
var verify = async(req,res,next)=>{
    var email = req.query.email;
    var verify1 = Email.verify;
    a=verify1;
    b=email;
    req.session.verify = verify1;
    req.session.email = email;
    req.session.time = Email.time;

    var mailOptions = {
        from:'喵喵网 1035326098@qq.com',
        to: email,
        subject: '喵喵网邮箱验证码',
        text: '验证码:'+verify1
    }
    Email.transporter.sendMail(mailOptions,(err)=>{
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
    req.session.username = '';
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
                username:req.session.username,
                admin:req.session.admin
            }
        });
    }else{
        res.send({
            msg:"获取用户信息失败",
            status:-1
        })
    }
};
var findPassword = async(req,res,next)=>{
    var {email,password,verify} = req.body;
    // console.log(email);
    // console.log(password);

    if(email === b && verify === a){
        var result = await UserModel.updatePassword(email,setCrypto(password));
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
var verifyImg = async (req,res,next)=>{
    var result = await createVerify(req,res);
    if(result){
        res.send(result);
    }
}

module.exports = {
    login,
    register,
    verify,
    logout,
    getUser,
    findPassword,
    verifyImg
}