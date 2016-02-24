var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var port = 5000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('public_html'));
app.use(express.static('views'));

app.listen(port, function(error) {
  console.log('Running server on port ' + port);
});

app.get('/', function(request, response) {
  response.send("hello blank")
});

app.get('/customers', function(request, response) {
  response.send("hello customers")
});

module.exports = app;