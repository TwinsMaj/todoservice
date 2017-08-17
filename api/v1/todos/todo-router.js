var express 		= require('express'),
	todoRouter      = express(),
	todoController  = require('./todo-controller.js');


todoRouter.post('/', todoController.addTodo)
todoRouter.get('/', todoController.fetchAllTodos)
todoRouter.get('/:id', todoController.fetchTodo)

module.exports = todoRouter;