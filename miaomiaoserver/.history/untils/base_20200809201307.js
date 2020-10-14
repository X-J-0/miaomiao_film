const crypto = require('crypto');
const captcha = require('trek-captcha');

var setCrypto = (info)=>{
    return crypto.createHmac('sha256', '$%$%^jfdkf')
                    .update(info)
                    .digest('hex');
};

var createVerify = (req,res)=>{
    captcha().then((info)=>{
        req.session.verifyImg = info.token;
        return info.buffer;
    }).catch(()=>{
        return false;
    });
}

module.exports = {
    setCrypto,
    createVerify
}