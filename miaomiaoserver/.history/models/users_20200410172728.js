var mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);
var UserSchema = new mongoose.Schema({
    username:{type:String,required:true,index:{unique:true}},
    password:{type:String,required:true},
    email:{type:String,required:true,index:{unique:true}},
    date:{type:Date,default:Date.now()}
});
var UserModel = mongoose.model('user',UserSchema);
UserModel.createIndexes();
// var save = (data)=>{
//     var user = new UserModel(data);
//     console.log(data);
//     return user.save()
//         .then(()=>{
//             return true;
//         })
//         .catch(()=>{
//             return false;
//         });
// };
var save = (data)=>{
    var user = new UserModel(data);
    user.insertOne(data).then(res => {
        console.log(res);
    }).catch(() => {
        console.log("hahh");
    })
};

var findLogin = (data)=>{
    return UserModel.findOne(data);
}
var updatePassword = (email,password)=>{
    return UserModel.update({email},{$set:{password}})
        .then(()=>{
            return true;
        }).catch(()=>{
            return false;
        });
}
module.exports = {
    save,
    findLogin,
    updatePassword
};