var expressjwt = require("express-jwt"),
	jwt 	   = require("jsonwebtoken");

exports.sign = function(id) {
	return jwt.sign(
		{_id: id}, 
		"jsonweb", 
		{expiresIn: 14 * 24 * 60 * 60}
	)
}
