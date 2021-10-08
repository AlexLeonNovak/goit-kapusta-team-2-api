const User = require('../../model/users/model');
const userDto = require('../../dtos/user');

const updateBalance = async (id, balance) => {
	const user = await User.findByIdAndUpdate(id, { balance }, {new: true});
	return userDto(user)
}


module.exports = updateBalance
