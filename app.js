var express = require('express');
var path = require('path');
var routes = require('./routes/index');
var app =  express();
var bodyParser=require('body-parser');


app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser());


app.use(routes);


module.exports = app;
