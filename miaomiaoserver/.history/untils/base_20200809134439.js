const crypto = require('crypto');

var setCrypto = (info)=>{
    return crypto.createHmac('sha256', '$%$%^jfdkf')
                    .update(info)
                    .digest('hex');
};
module.exports = {
    setCrypto
}