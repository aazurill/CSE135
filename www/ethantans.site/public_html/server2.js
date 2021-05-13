const mongo = require('mongodb').MongoClient;
const MONGO_URL = "mongodb://localhost:27017/"
// Mongo collections : activity, performance, static, tester
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyparser = require("body-parser");

const app = express();
app.set('json spaces', 4);

var db;
mongo.connect(MONGO_URL, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        console.log(`DB Connection Error: ${err.message}`);
    } else {
        db = client.db('user_data');
        console.log(`Connected To DB`);
    }
});
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

//Request Session
app.get('/', (req, res, next) => {
  res.json({sessionId: req.sessionID});
  console.log(req.sessionID);
})


// ACTIVITY


// Activity - Post
app.post('/activity',
  bodyparser.raw({ type: "application/json" }),
  function (req, res) {
    var myobj = JSON.parse(req.body);
    db.collection("activity").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    });
})


// Activity - Get
app.get("/activity", (req, res) => {
  db.collection("activity").find().toArray(function(err, result) {
    if (err) throw err;
    console.log(res);
    res.json(result);
  });
})

// Activity - Get specific
app.get("/activity/:id", (req, res) => {
  let query = {sessionId: req.params.id};
  db.collection("activity").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(res);
    res.json(result);
  });
})

// Activity - Delete
app.delete("/activity/:id", (req, res) => {
  let query = {sessionId: req.params.id};
  db.collection("activity").deleteOne(query, function (err, obj) {
    if (err) throw err;
    console.log("Document Deleted");
  });
})

// Activity - Put
app.put('/activity/:id',
  bodyparser.raw({ type: "application/json" }),
  function (req, res) {
    let query = {sessionId: req.params.id};
    var myobj = JSON.parse(req.body);
    console.log(myobj);
    db.collection("activity").findOneAndUpdate(query, {$set:myobj}, function(err, ye) {
      if(err) { throw err;}
      console.log("Updated Entry")
    })
})


// PERFORMANCE


// Performance - Post
app.post('/performance',
  bodyparser.raw({ type: "application/json" }),
  function (req, res) {
    var myobj = JSON.parse(req.body);
    db.collection("performance").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 performance document inserted");
    });
})


// Performance - Get
app.get("/performance", (req, res) => {
  db.collection("performance").find().toArray(function(err, result) {
    if (err) throw err;
    console.log("performance get");
    res.json(result);
  });
})

// Performance - Get specific
app.get("/performance/:id", (req, res) => {
  let query = {sessionId: req.params.id};
  db.collection("performance").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log("specific performance get");
    res.json(result);
  });
})

// Performance - Delete
app.delete("/performance/:id", (req, res) => {
  let query = {sessionId: req.params.id};
  db.collection("performance").deleteOne(query, function (err, obj) {
    if (err) throw err;
    console.log("Performance Document Deleted");
  });
})

// Performance - Put
app.put('/performance/:id',
  bodyparser.raw({ type: "application/json" }),
  function (req, res) {
    let query = {sessionId: req.params.id};
    var myobj = JSON.parse(req.body);
    console.log(myobj);
    db.collection("performance").findOneAndUpdate(query, {$set:myobj}, function(err, ye) {
      if(err) { throw err;}
      console.log("Updated Performance Entry")
    })
})


// STATIC

// Static - Post
app.post('/static',
  bodyparser.raw({ type: "application/json" }),
  function (req, res) {
    var myobj = JSON.parse(req.body);
    db.collection("static").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 static document inserted");
    });
})


// Static - Get
app.get("/static", (req, res) => {
  db.collection("static").find().toArray(function(err, result) {
    if (err) throw err;
    console.log("static get");
    res.json(result);
  });
})

// Static - Get specific
app.get("/static/:id", (req, res) => {
  let query = {sessionId: req.params.id};
  db.collection("static").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log("specific static get");
    res.json(result);
  });
})

// Static - Delete
app.delete("/static/:id", (req, res) => {
  let query = {sessionId: req.params.id};
  db.collection("static").deleteOne(query, function (err, obj) {
    if (err) throw err;
    console.log("Static Document Deleted");
  });
})

// Static - Put
app.put('/static/:id',
  bodyparser.raw({ type: "application/json" }),
  function (req, res) {
    let query = {sessionId: req.params.id};
    var myobj = JSON.parse(req.body);
    console.log(myobj);
    db.collection("static").findOneAndUpdate(query, {$set:myobj}, function(err, ye) {
      if(err) { throw err;}
      console.log("Updated Static Entry")
    })
})





let port = 8080;
app.listen(port, function() {
  console.log('listening on port ' + port);
});