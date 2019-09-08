var express = require('express');
var path = require('path');
var routes = require('./routes/index');
var app =  express();


app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/', routes);
app.use('/sitemap', routes);


module.exports = app;
