
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');

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
    res.render('projects/projectnav.jade', { 
			pageData: {
        title: 'projects'
    }
    });
});

app.get('/projects/alexandraastor', function(req, res){
	fs.readdir('public/images/gallery/alexandraastor', function(err, data){
		res.render('projects/projectgallery.jade', {
			pageData: {
				title: 'Alexandra Astor',
				path: '/images/gallery/alexandraastor/',
				files	: data,
				link: 'alexandraastor',
				page : 0,
				pagelen: 6
			}
		});
	});
});

app.get('/projects/alexandraastor/2', function(req, res){
	fs.readdir('public/images/gallery/alexandraastor', function(err, data){
		res.render('projects/projectgallery.jade', {
			pageData: {
				title: 'Alexandra Astor',
				path: '/images/gallery/alexandraastor/',
				files	: data,
				page : 1,
				link: 'alexandraastor',
				pagelen: 6
			}
		});
	});
});

app.get('/projects/cauleensmith', function(req, res){
	fs.readdir('public/images/gallery/cauleensmith', function(err, data){
		res.render('projects/projectgallery.jade', {
			pageData: {
				title: 'Cauleen Smith',
				path: '/images/gallery/cauleensmith/',
				files	: data,
				link: 'cauleensmith',
				page : 0,
				pagelen: 6
			}
		});
	});
});

app.get('/projects/cauleensmith/2', function(req, res){
	fs.readdir('public/images/gallery/cauleensmith', function(err, data){
		res.render('projects/projectgallery.jade', {
			pageData: {
				title: 'Cauleen Smith',
				path: '/images/gallery/cauleensmith/',
				files	: data,
				page : 1,
				link: 'cauleensmith',
				pagelen: 6
			}
		});
	});
});


app.get('/projects/margauxfranco/fall2012', function(req, res){
	fs.readdir('public/images/gallery/margauxfranco/fall2012', function(err, data){
		res.render('projects/projectgallery.jade', {
			pageData: {
				title: 'Margaux Franco Fall 2012',
				path: '/images/gallery/margauxfranco/fall2012/',
				files	: data,
				link: 'margauxfranco/fall2012',
				page : 0,
				pagelen: 6
			}
		});
	});
});

app.get('/projects/margauxfranco/spring2013', function(req, res){
	fs.readdir('public/images/gallery/margauxfranco/spring2013', function(err, data){
		res.render('projects/projectgallery.jade', {
			pageData: {
				title: 'Margaux Franco Spring 2013',
				path: '/images/gallery/margauxfranco/spring2013/',
				files	: data,
				link: 'margauxfranco/spring2013',
				page : 0,
				pagelen: 6
			}
		});
	});
});


app.get('/projects/margauxfranco/spring2013/2', function(req, res){
	fs.readdir('public/images/gallery/margauxfranco/spring2013', function(err, data){
		res.render('projects/projectgallery.jade', {
			pageData: {
				title: 'Margaux Franco Spring 2013',
				path: '/images/gallery/margauxfranco/spring2013/',
				files	: data,
				link: 'margauxfranco/spring2013',
				page : 1,
				pagelen: 6
			}
		});
	});
});

app.get('/projects/jessicamazza', function(req, res){
	fs.readdir('public/images/gallery/jessicamazza', function(err, data){
		res.render('projects/projectgallery.jade', {
			pageData: {
				title: 'Jessica Mazza',
				path: '/images/gallery/jessicamazza/',
				files	: data,
				page : 0,
				pagelen: 6,
				link: 'jessicamazza'
			}
		});
	});
});


app.get('/projects/jessicamazza/2', function(req, res){
	fs.readdir('public/images/gallery/jessicamazza', function(err, data){
		res.render('projects/projectgallery.jade', {
			pageData: {
				title: 'Jessica Mazza',
				path: '/images/gallery/jessicamazza/',
				link: 'jessicamazza',
				files	: data,
				page : 1,
				pagelen: 6,
			}
		});
	});
});


app.get('/shop', function(req, res) {
    res.render('shop.jade', { 
			locals: {
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