var express 		= require('express'),
	todoRouter      = express.Router(),
	todoController  = require('./todo-controller.js');

todoRouter.param("id", todoController.intercept)

todoRouter.route('/')
	.post(todoController.addTodo)
	.get(todoController.fetchAllTodos)

todoRouter.route('/:id')
	.get(todoController.fetchTodo)

module.exports = todoRouter;

chai
mocha -g
supertest