var mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);
var MovieSchema = new mongoose.Schema({
    name:{type:String,require:true,index:{unique:true}},
    remark:{type:String,require:true},
    actress:{type:String,require:true},
    times:{type:String,require:true},
    dec:{type:String,require:true},
    pic:{type:String,require:true}
});
var MovieModel = mongoose.model('movies',MovieSchema);
MovieModel.createIndexes();
var save = (data)=>{
    var movie = new MovieModel(data);
    return movie.save()
        .then(()=>{
            return true;
        })
        .catch(()=>{
            return false;
        });
};
var remove = (data)=>{
    return MovieModel.deleteOne(data);
}
var a = undefined;
var find = (data)=>{
    a = data;
    console.log(a);
    return MovieModel.findOne(data);
}
var update = (data)=>{
    console.log(a);
    return MovieModel.update({a},{data});
}
module.exports = {
    save,
    remove,
    find,
    update
};