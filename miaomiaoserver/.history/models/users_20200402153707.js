var mongoose = require('mongoose');
mongoose.set('userCreateIndex',true);
var UserSchema = new mongoose.Schema({
    username:{type:String,required:true,index:{unique:true}},
    password:{type:String,required:true},
    email:{type:String,required:true,index:{unique:true}},
    date:{type:Date,default:Date.now()}
});
var UserModel = mongoose.model('user',UserSchema);
UserModel.createIndexes();
var save = ()=>{

};

module.exports = {
    save
};