// const jwt = require('jsonwebtoken');

const User = require('../../model/users/model');
// const ErrorException = require('../../exceptions/error.exception');
const userDto = require('../../dtos/user');

// const {JWT_ACCESS_SECRET} = process.env;

const updateBalance = async (email, password, balance) => {
	// const user = await User.findOne({email});
	// if (!user || !user.isValidPassword(password)) {
	// 	throw ErrorException.BadRequest('Wrong email or password');
	// }
	const user = await User.findOneAndUpdate({balance})
    const userData = userDto(user);
    // userData.findOneAndUpdate(balance)
	// const token = jwt.sign(userData, JWT_ACCESS_SECRET);
	// user.accessToken = token;
	
    // const update = await User.findOneAndUpdate({balance})
	await user.save();
	return {
		user: userData,
        // token,
        // update
	}
}


module.exports = updateBalance
