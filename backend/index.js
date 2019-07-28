const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "pow"
});

// CORSを許可する,getの前に記述しなければいけない。
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/sarch', function(req, res){

    var sql = "select * from ski_area WHERE name like '%"+req.body.area+"%' AND pref = '"+req.body.pref+"';";
    if(req.body.pref===""){
      var sql = "select * from ski_area WHERE name like '%"+req.body.area+"%';";
    }
    connection.query(sql, function(
      error,
      results,
      fields
    ) {
      if (error) throw error;
      res.send(results);
    });
  });

  app.post('/wether', function(req, res) {
    
    var request = require('request');
    var url = `https://api.darksky.net/forecast/cbffab3e17ed52aa8f713bd16cac50c3/${req.body.latlong}?units=si&lang=ja`;
    var options = {
      url: url,
      method: 'GET',
      json: true
    }
    request(options, function (error, response, body) {
      res.header('Content-Type', 'application/json; charset=utf-8')
      res.send(body);
    })
  });

  

app.listen(4000, function() {
  console.log("Example app listening on port 4000!");
});