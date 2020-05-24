var mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);
var MovieSchema = new mongoose.Schema({
    moviename:{type:String,require:true,index:{unique:true}},
    remark:{type:String,require:true},
    actress:{type:String,require:true},
    times:{type:String,require:true},
    dec:{type:String,require:true},
    pic:{type:String,require:true}
});
var UserModel = mongoose.model('movie',MovieSchema);
UserModel.createIndexes();
