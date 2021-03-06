var mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);
var CinemaSchema = new mongoose.Schema({
    name:{type:String,require:true},
    price:{type:String,require:true},
    card:{type:String,require:true},
    distance:{type:String,require:true}
});
var CinemaModel = mongoose.model('cinema',CinemaSchema);
CinemaModel.createIndexes();
var save = (data)=>{
    var cinema = new CinemaModel(data);
    return cinema.save()
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