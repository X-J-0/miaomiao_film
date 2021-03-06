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
var MovieModel = mongoose.model('movie',MovieSchema);
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
    MovieModel.remove(data);
    return true;
    // var movie = new MovieModel(data);
    // return movie.remove()
    // .then(()=>{
    //     return true;
    // })
    // .catch(()=>{
    //     return false;
    // })
}

module.exports = {
    save,
    remove
};