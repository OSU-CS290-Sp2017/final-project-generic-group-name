var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 3000;
var members = require('./members');
//var bodyParser = require('body-parser');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//app.use(bodyParser.json());

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
app.get('/aboutMembers.html', function(req, res, next){
	var tempTitle = "Women's Water Polo Club Members";
	var templateArgs = {
		people: members,
		title: tempTitle
	}
	res.render('aboutMembers', templateArgs);
});

/*app.post("/people:member/", function(req, res, next))
{
	var person = members[req.params.person];
	if (person)
	{
		if (req.body && req.body.url && req.body.name && req.body.hobby1 && req.body.hobby2 && req.body.hobby3 && req.body.about)
		{
			var templateArgs = {
				name: req.body.name,
				url: req.body.url,
				hobby1: req.body.hobby1,
				hobby2: req.body.hobby2,
				hobby3: req.body.hobby3,
				about: req.body.about
			};
			person.name = person.name;
		}
	}
} ^ may not need since no array in members.json */

app.use(express.static(path.join(__dirname, 'profilepics')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'slideshow_images')));

app.get('*', function (req, res) {
  res.status(404).render('404Page');
});

app.listen(port, function () {
  console.log("== Server listening on port", port);
});
