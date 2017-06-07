var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 3000;
var members = require('./members');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res, next) {
	var tempTitle = "Women's Water Polo Club";
  var templateArgs = {
    title: tempTitle
	
  };

  res.render('index', templateArgs);

});
app.get('/index.html', function (req, res, next) {
	var tempTitle = "Women's Water Polo Club";
  var templateArgs = {
    title: tempTitle
	
  };

  res.render('index', templateArgs);

});

app.get('/calendar.html', function (req, res, next){
	var tempTitle = "June 2017 Events Calendar";
	var templateArgs = {
		title: tempTitle
	}
	res.render('calendar', templateArgs);
});
app.get('/calendar', function (req, res, next){
	var tempTitle = "June 2017 Events Calendar";
	var templateArgs = {
		title: tempTitle
	}
	res.render('calendar', templateArgs);
});
app.get('/aboutMembers.html', function(req,res,next){
	var tempTitle = "Women's Water Polo Club Members";
	var templateArgs = {
		people: members,
		title: tempTitle
	}
	res.render('aboutMembers', templateArgs);
});


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'slideshow_images')));

app.get('*', function (req, res) {
  res.status(404).render('404Page');
});

app.listen(port, function () {
  console.log("== Server listening on port", port);
});
