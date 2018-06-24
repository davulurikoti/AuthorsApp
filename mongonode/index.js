var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to mongoose
mongoose.connect('mongodb://localhost/authors');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var authorsSchema = mongoose.Schema({
    name: String
  });
  var Authors = mongoose.model('authors', authorsSchema);
/*db.once('open', function() {
    var authorsSchema = mongoose.Schema({
        name: String
      });
      var Authors = mongoose.model('Authors', authorsSchema);
      var koti = new Authors({ name: 'Koti Rama Murthy1' });
        koti.save(function (err, koti) {
            if (err) return console.error(err);
            console.log(koti.name);
          });
          Authors.find(function (err, authors) {
            if (err) return console.error(err);
            console.log(authors);
          })
});*/

app.get('/',function(req,res){
    res.send('Please use /api/authors');
});

app.get('/authorscollection',function(req,res){
    
    Authors.find(function(err,authors){
        if(err){
            throw err;
        }
        console.log(authors); 
        res.send(authors);
    });
});


app.listen('3010',function(){
    console.log('listening to 3010 port')
});