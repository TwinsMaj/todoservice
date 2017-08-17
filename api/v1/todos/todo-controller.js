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