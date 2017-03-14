
var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

exports.all = function( cb ){
    db.get().collection('notes').find().toArray(function( err, docs){
        cb(err, docs)
    });
};

exports.findById = function( id, cb ){
    db.get().collection('notes').findOne({_id: ObjectID(id)}, function( err, doc ){
        cb(err, doc)
    });
};

exports.create = function( artist, cb ){
    db.get().collection('notes').insert(artist, function (err, result){
        cb( err, result)
    })
};

exports.update = function( id, newData, cb){
    db.get().collection('notes').updateOne(
        {_id: ObjectID( id)},
        newData,
        function( err, result){
            cb(err, result)
        }
    );
};

exports.delete = function( id,  cb){
    db.get().collection('notes').deleteOne(
        {_id: ObjectID( id)},
        function( err, result){
            cb(err, result)
        }
    );
};