var todoModel = require('./todo-model.js'),
	userModel = require('../users/user-model.js');

exports.intercept = function(req, res, next, id) {
	todoModel.findById(id, function(err, todo) {
		if(err) {
			req.errstatus = 404;
			return next(new Error("Invalid ID. cannot find todo"));
		}

		req.todo = todo
		next();
	})
}

exports.addTodo = function(req, res, next) {
	// prepare a new todo model with incoming req
	var todo = new todoModel(req.body);
	todo["parent"] = req.user._id

	todo.save(function(err, todo) {
		if(err) {
			req.errstatus = 500;
			return next(err);
		}

		res.status(200).json(todo);
	})
}

exports.fetchAllTodos = function(req, res, next) {
	/*todoModel.find(function(err, todos) {
		if(err) {
			req.errstatus = 500;
			return next(err);
		}

		res.status(200).json(todos);
	})*/
	userModel.find({_id: req.user._id})
		.populate('todos')
		.exec(function(err, todos) {
			if(err) {
				req.errstatus = 404
				return next(new Error("could not find users with todos"))
			}

			res.status(200).json(todos);
		})
}

exports.fetchTodo = function(req, res, next) {
	var id = req.params.id
	res.status(200).json(req.todo);
}