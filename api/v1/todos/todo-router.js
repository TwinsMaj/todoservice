var express 		= require('express'),
	todoRouter      = express(),
	todoController  = require('./todo-controller.js');


todoRouter.post('/', todoController.addTodo)

module.exports = todoRouter;