var mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);
var CinemaSchema = new mongoose.Schema({
    cinema:{type:String,require:true},
    address:{type:String,require:true},
    distance:{type:String,require:true},
    juan:{type:String,require:true}
});
var CinemaModel = mongoose.model('cinemas',CinemaSchema);
CinemaModel.createIndexes();