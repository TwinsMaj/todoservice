var express = require('express'),
	bps		= require('body-parser'),
	morgan	= require('morgan');

// initialize express
var app = express();

// load application level middlewares
app.use(morgan('dev'));
app.use(bps.urlencoded({extended: false}))
app.use(bps.json());

// mount all routes/endpoints here

// setup application error handler
app.use(function (err, req, res, next) {
	res.send(req.errstatus).json(err.message);
})

// export the application object
module.exports = app;