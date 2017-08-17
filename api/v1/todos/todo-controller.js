var todoModel = require('./todo-model.js');

exports.addTodo = function(req, res, next) {
	// prepare a new todo model with incoming req
	var todo = new todoModel(req.body);

	todo.save(function(err, todo) {
		if(err) {
			req.errstatus = 500;
			return next(err);
		}

		res.status(200).json(todo);
	})
}

exports.fetchAllTodos = function(req, res, next) {
	todoModel.find(function(err, todos) {
		if(err) {
			req.errstatus = 500;
			return next(err);
		}

		res.status(200).json(todos);
	})
}

exports.fetchTodo = function(req, res, next) {
	var id = req.params.id

	todoModel.findById(id, function(err, todo) {
		if(err) {
			req.errstatus = 404;
			return next(new Error("Invalid ID. cannot find todo"));
		}

		res.status(200).json(todo);
	})
}