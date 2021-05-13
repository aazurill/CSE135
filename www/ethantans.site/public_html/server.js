// app.js file

var jsonServer = require('json-server');

// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());

// Add custom routes
// server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) })

// Returns an Express router
var router = jsonServer.router('db.json');

server.use(router);

server.listen(3000)
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/"

// const express = require('express')
// const fs = require("fs");
// const bodyparser = require("body-parser");
// const app = express();
// app.set('json spaces', 4);

// app.post('/activity',
//   bodyparser.raw({ type: "application/json" }),
//   function (req, res) {
//     console.log(JSON.parse(req.body));
//     MongoClient.connect(url, function (err, db) {
//       if (err) throw err;
//       var dbo = db.db("data");
//       var myobj = JSON.parse(req.body);

//       dbo.collection("activity").insertOne(myobj, function (err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         db.close();
//       });
//     });
//     res.status(200);
//   })


// app.post('/profile',
//   bodyparser.raw({ type: "application/json" }),
//   function (req, res) {
//     console.log(JSON.parse(req.body));


//     MongoClient.connect(url, function (err, db) {
//       if (err) throw err;
//       var dbo = db.db("data");
//       var myobj = JSON.parse(req.body);

//       dbo.collection("test").insertOne(myobj, function (err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         db.close();
//       });
//     });
//     res.status(200);
//   })

// // Access all profiles
// app.get("/profile", (req, res) => {
//     MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("data");

//     dbo.collection("test").find().toArray(function(err, result) {
//       if (err) throw err;
//       console.log(res);
//       res.json(result);
//       db.close();
//     });
//   });
// })
// // Access specific profile
// app.get("/profile/:id", (req, res) => {
//   let id = parseInt(req.params.id, 10);
//   let query = {personalid: id};
//   MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("data");

//     dbo.collection("test").find(query).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(res);
//       res.json(result);
//       db.close();
//     });
//   });
// })

// // Delete specific profile
// app.delete("/profile/:id", (req, res) => {
//   let id = parseInt(req.params.id, 10);
//   let query = {personalid: id};
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     db.collection("customers").remove(query, function(err, obj) {
//       if (err) throw err;
//       console.log(obj.result.n + " document(s) deleted");
//       db.close();
//     });
//   });
// })

// app.put("/profile/:id", (req, res) => {
//   let id = parseInt(req.params.id, 10);
//   let query = {personalid: id}
//   let entry = {};
//   entry = req.body.data;
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     db.collection("customers").updateOne({query},{entry}, (err) => {
//       if (err) throw err;
//       console.log(obj.result.n + " document(s) updated");
//       db.close();
//     });
//   });
//     // if (metricNames.has(req.params.metricName)) {
//     //     var entry = {};
//     //     if (allowed[req.params.metricName] != undefined && typeof req.body.data == "object") {
//     //         for (var key of allowed[req.params.metricName]) {
//     //             entry[key] = req.body.data[key];
//     //         }
//     //     } else {
//     //         if (vitalsScores.has(req.params.metricName)) {
//     //             entry.vitalsScore = req.body.vitalsScore;
//     //         }
//     //         entry.data = req.body.data;
//     //     }
//     //     collections[req.params.metricName].updateOne({ _id: new ObjectId(req.params.id) }, { $set: entry }, (err) => {
//     //         if (err) {
//     //             res.status(500).json({ message: err.message });
//     //         } else {
//     //             res.json({ message: `Successfully Updated ${req.params.id} From Collection ${req.params.metricName}` });
//     //         }
//     //     });
//     // } else {
//     //     res.status(404).json({ message: "Invalid Route" });
//     // }
// });

// app.listen(3000);

