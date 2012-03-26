var github = require('octonode');
var http = require('http');
var url = require('url');
var qs = require('querystring');
var auth_url = github.auth.config({
  client_id: '2bcd7c49892058980009',
  client_secret: '135a150d0db1c9bb9613b7ab86e3bcd257524633'
}).login(['user', 'repo', 'gist']);

exports.github = function(req, res) {
  res.redirect(auth_url);
};

exports.loggedIn = function(req, res) {
  var uri = url.parse(req.url);
  github.auth.login(qs.parse(uri.query).code, function (err, token) {
    req.session.githubToken = token;
  });
  res.redirect('/');
};
