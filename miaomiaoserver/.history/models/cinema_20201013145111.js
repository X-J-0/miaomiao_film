var mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);
var CinemaSchema = new mongoose.Schema({
    name:{type:String,require:true,index:{unique:true}},
    remark:{type:String,require:true},
    actress:{type:String,require:true},
    times:{type:String,require:true},
    dec:{type:String,require:true},
    pic:{type:String,require:true}
});
var CinemaModel = mongoose.model('cinemas',CinemaSchema);
CinemaModel.createIndexes();
var save = (data)=>{
    var movie = new CinemaModel(data);
    return movie.save()
        .then(()=>{
            return true;
        })
        .catch(()=>{
            return false;
        });
};
var remove = (data)=>{
    return CinemaModel.deleteOne(data);
}
var a = undefined;
var find = (data)=>{
    a = data;
    return CinemaModel.find(data);
}
var update = (data)=>{
    return CinemaModel.update(a,data);
}
module.exports = {
    save,
    remove,
    find,
    update
};