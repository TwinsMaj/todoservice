var auth	= require('./auth.js');

exports.signIn = function(req, res, next) {
	var user = req.user.toObject(),
		token = auth.sign(user._id);

	user['_token'] = token;
	res.status(200).json(user);
}