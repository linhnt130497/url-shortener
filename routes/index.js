var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var shortid = require('shortid');
var valiUrl = require('valid-url');
//var config = require('../config');

//var mLab = "mongodb://" +config.db.host + "/" + config.db.name;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'URL Shortener Microservice' , host: req.get('host')});
});


router.get('/new/:url(*)',function (req,res,next) {
  var local = req.get('host') + "/";
  // MongoClient.connect(mLab, function (err,db) {
  //   if(err){
  //     console.log("Unable to connect to server", err);
  //   }else{
  //     console.log("Connected to server");
  //     var collection = db.collection('links');
  //     var paramsUrl = req.params.url;


  //     var newLink = function(db, callback) {
  //       collection.findOne({"url":paramsUrl},{shortCode:1, _id:0}, function(err,documentResult){
  //         if(documentResult!= null){
  //           res.send(JSON.stringify({origin_url: paramsUrl, short_url: local + documentResult.shortCode}));
  //         }else{
  //           if(valiUrl.isUri(paramsUrl)){
  //             var shortCode = shortid.generate();
  //             var data = {url: paramsUrl, shortCode: shortCode };
  //             collection.insert(data);
  //             res.send(JSON.stringify({origin_url: paramsUrl, short_url: local + shortCode}));
  //           }else{
  //             res.send("Wrong url format");
  //           };
  //         };
  //       });
  //     };

  //     newLink(db, function(){
  //       db.close();
  //     });
  //   };
  // })
});


router.get("/:shortCode", function(req, res, next){
  if(req.params.shortCode != "favicon.ico"){
    // MongoClient.connect(mLab, function (err, db) {
    //   if(err){
    //     console.log("Unable to connect to server");
    //   }else{
    //     console.log("Connected to server");
    //     var collection = db.collection('links');
    //     var shortCode = req.params.shortCode;

    //     var findLink = function (db, callback) {
    //       collection.findOne({"shortCode": shortCode},{url:1, _id: 0 }, function(err, documentResult){
    //         if(documentResult != null){
    //           res.redirect(documentResult.url);
    //         }else{
    //           res.send("No url in database");
    //         }
    //       })
    //     };

    //     findLink(db, function(){
    //       db.close();
    //     });
    //   }
    // })
  }

});

module.exports = router;
