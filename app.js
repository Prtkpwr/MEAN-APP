//including express in the app
var express = require('express');
//for using app instead of express()
var app = express();
//process.evn.PORT is used so that, if process has its own port then it will be used OR port 3000 will be used.. mostly used for heroku
var port = 3000;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var routes = require('./app/routes/api')(router);

//to use the logging in console
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',routes);



//for connecting to the database
mongoose.connect('mongodb://localhost/meanApp', function(err){
	if (err){
		console.log('Not connceted to Database :' + err);
	} else {
		console.log('Successfully connected to Database');
	}
});





app.listen(port, function(){ 
	console.log("Server Running!")
});