
/**
 * Module dependencies.
 */

var express = require('express'),
    auth = require('./auth.js');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.use(express.static(__dirname + '/public'));
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({ secret: "your mom" }));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/auth/github', auth.github);
app.get('/auth', auth.loggedIn);

app.listen(process.env.PORT || 3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
