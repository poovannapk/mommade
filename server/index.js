const express =  require('express');
const { MongoClient } = require('mongodb');
var url = "mongodb://localhost:27017/";

const app =  express();
const port =  process.env.PORT || 5000 

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mommade");
    dbo.createCollection("users", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myobj = { name: "Company Inc", email: "Highway 37", password:"poovanna@123" };
    dbo.collection("users").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`)
})