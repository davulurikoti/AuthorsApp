var mongoose = require('mongoose');

//Author schema
var authorSchema = mongoose.Schema({
    name: {type :String},
    id: {type :String},
    rating: {type :Number},
    imageurl: {type :String}
});

var Author = module.exports = mongoose.model('Author',authorSchema);

//Get Authors
module.exports.getAuthors = function(callback, limit){
    Author.find(callback).limit(limit);
};