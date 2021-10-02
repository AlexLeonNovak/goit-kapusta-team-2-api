const jwt = require('jsonwebtoken');

const UserRepo = require('../repositories/user')
const ErrorException = require('../exceptions/error.exception');

const {JWT_ACCESS_SECRET} = process.env;

module.exports = async (req, res, next) => {
	try {
		const [type, token] = req.headers.authorization?.split(' ');
		if (type !== 'Bearer' || !token) {
			throw new Error();
		}
		const user = await UserRepo.getByToken(token);
		const userData = jwt.verify(token, JWT_ACCESS_SECRET);
		if (!user || !userData) {
			throw new Error();
		}

		req.user = user;

		return next();
	} catch (e) {
		next(ErrorException.UnauthorizedError())
	}
}
