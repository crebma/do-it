var github = require('octonode');
var http = require('http');
var url = require('url');
var qs = require('querystring');
var auth_url = github.auth.config({
  client_id: 'client_id_from_github',
  client_secret: 'client_secret_from_github'
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
