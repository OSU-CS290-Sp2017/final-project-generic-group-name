var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 3000;

/*
//add members json file
var membersData = require('./')
*/

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/*
app.get('/', function(req, res, next){
  var templateArgs={
      //add our templateArgs
  }
  res.status(200).render('', templateArgs);
});
*/


app.get('*', function (req, res) {
  res.status(404).render('404Page');
});

app.listen(port, function () {
  console.log("== Server listening on port", port);
});
