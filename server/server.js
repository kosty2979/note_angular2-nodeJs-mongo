var express = require('express');
var bodyParser = require('body-parser');
//var MongoClient = require('mongodb').MongoClient;
//var ObjectID = require('mongodb').ObjectID;
var db = require('./db');
var notesController =require('./controllers/notes');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/', function( req, res ){
    res.send('hello API');
});

app.get('/notes', notesController.all );

app.get('/notes/:id', notesController.findById );

app.post('/notes', notesController.create );

app.put('/notes/:id', notesController.update);

app.delete('/notes/:id', notesController.delete);


db.connect('mongodb://root:incode2015@ds145359.mlab.com:45359/mybase', function(err){
    if(err){
        return console.log(err)
    };
    app.listen(3000, function(){
    console.log("start API on localhost:3000")
    });
})