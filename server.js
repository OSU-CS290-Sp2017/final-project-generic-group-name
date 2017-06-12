var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 3000;
var members = require('./members');
var bodyParser = require('body-parser');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());

app.get('/', function (req, res, next)
{
	var tempTitle = "Women's Water Polo Club";
  var templateArgs = {
    title: tempTitle
  };
  res.render('index', templateArgs);
});

app.get('/index.html', function (req, res, next)
{
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

app.post('/aboutMembers.html', function (req, res)
{
    if (req.body)
		{
			console.log("here");
      var member = {
        url: req.body.url,
        name: req.body.name,
				about: req.body.about,
				hobby1: req.body.hobby1,
				hobby2: req.body.hobby2,
				hobby3: req.body.hobby3
    };
		members.push(member);
    fs.writeFile('members.json', JSON.stringify(members), function (err)
		{
      if (err)
			{
      	res.status(500).send("Unable to save photo to \"database\".");
      }
			else
			{
        res.status(200).send();
      }
    });
    }
		else
		{
      res.status(400).send("Person photo must have a URL.");
		}
});

app.use(express.static(path.join(__dirname, 'profilepics')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'slideshow_images')));

app.get('*', function (req, res)
{
  res.status(404).render('404Page');
});

app.listen(port, function ()
{
  console.log("Server listening on port", port);
});
