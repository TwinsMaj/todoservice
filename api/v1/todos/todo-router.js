var express 		= require('express'),
	todoRouter      = express.Router(),
	auth			= require('../auth/auth.js'),
	todoController  = require('./todo-controller.js');

todoRouter.param("id", todoController.intercept)

todoRouter.route('/')
	.post(auth.decodeToken, todoController.addTodo)
	.get(auth.decodeToken, todoController.fetchAllTodos)

todoRouter.route('/:id')
	.get(todoController.fetchTodo)

module.exports = todoRouter;