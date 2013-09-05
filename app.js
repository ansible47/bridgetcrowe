
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/home', function(req, res) {
    res.render('home.jade', { locals: {
        title: 'Home'
    }
    });
});

app.get('/contact', function(req, res) {
    res.render('contact.jade', { locals: {
        title: 'Contact'
    }
    });
});

app.get('/projects', function(req, res) {
    res.render('projects/projects.jade', { locals: {
        title: 'Projects'
    }
    });
});

app.get('/shop', function(req, res) {
    res.render('shop.jade', { locals: {
        title: 'Shop'
    }
    });
});

app.use(function(req, res, next) {
  if (req.path.split('/')[0] === "downloads")
    res.attachment(); //short for res.set('Content-Disposition', 'attachment')
  next();
});

app.use(express.static(__dirname + '/public'));




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
