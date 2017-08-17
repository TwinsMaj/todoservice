var express = require('express'),
	api		= express.Router(),
	todoRoute = require('./v1/todos/todo-router.js');

// mount routes
api.use('/todos', todoRoute);

module.exports = api