var request = require('supertest'),
	chai	= require('chai'),
	app		= require('./server.js'),
	assert  = chai.assert,
	expect  = chai.expect,
	should  = chai.should();

describe('#todosRoutesSpecs', function() {

	it("should add a todo item to the db", function(done) {
		var data = {
			task: "do some tests",
			date: "20th Aug, 2017",
			time: "11:00pm"
		}

		request(app)
			.post('/api/v1/todos')
			.set("Content-Type", "Application/json")
			.send(data)
			.end(function(err, res) {
				expect(res.body).to.be.an('object');
				expect(res.body.task).to.be.equal("do some tests");
				expect(res.body.date).to.be.equal("20th Aug, 2017");
				expect(res.body.time).to.be.equal("11:00pm");
				done();
			})
	})

	/*xit("should get a tod item from the db", function(done) {

	})*/

})