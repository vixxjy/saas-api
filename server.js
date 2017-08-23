// setting up the server
var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

var mongoose = require('mongoose');
var Teacher = require('./staff/models/staffModel');
var bodyParser = require('body-parser');

// creating a mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://smilez:smilez.123@ds153113.mlab.com:53113/teacher_service'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// setting up the route
var routes = require('./staff/routes/staffRoute'); //importing route
routes(app); //register the route


app.listen(port);

console.log('app running on: ' + port);