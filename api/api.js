var express = require('express'),
	api		= express.Router(),
	todoRoute = require('./v1/todos/todo-router.js'),
	userRoute = require('./v1/users/user-router.js');

// mount routes
api.use('/todos', todoRoute);
api.use('/users', userRoute);

module.exports = api