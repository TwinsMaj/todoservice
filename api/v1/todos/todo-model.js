var mongoose = require('mongoose'),
	todoSchema;

// connect to mongoose db
mongoose.connect("mongodb://localhost/todos")

todoSchema = new mongoose.Schema({
	task: {type: String, required: true},
	date: {type: String, required: true},
	time: {type: String, required: true}
})

module.exports = mongoose.model("tasks", todoSchema);