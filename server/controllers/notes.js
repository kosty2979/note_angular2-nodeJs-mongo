var Notes = require("../models/notes");

exports.all = function( req, res){
    Notes.all( function(err, docs){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs)
    })
};

exports.findById = function( req, res ){
    Notes.findById( req.params.id, function(err, doc){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
};

exports.create = function(req, res){
    var note ={
        title: req.body.title,
        date: Date.now(),
        text: req.body.text
    };
    Notes.create(note, function( err, result){
        if(err){
            console.log(err);
            return res.sendStatus(500)
        }
        res.sendStatus(200)
    })
};

exports.update = function(req, res){
    Notes.update( req.params.id,
        {
            title: req.body.title,
            lastModDate: Date.now(),
            text: req.body.text,
        },
            function(err, result){
            if(err){
                console.log(err);
                return res.sendStatus(500)
            }
            res.sendStatus(200)
    })
};

exports.delete = function( req, res){
    Notes.delete( req.params.id, function( err, result ){
        if (err) {
            console.log(err);
            return res.sendStatus(500)
        }
        res.sendStatus(200)
    })
};