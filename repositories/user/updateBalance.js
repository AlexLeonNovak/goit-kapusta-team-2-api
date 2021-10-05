const User = require('../../model/users/model');
const userDto = require('../../dtos/user');

const updateBalance = async ( newBalance, id) => {
	const user = await User.findByIdAndUpdate(id, { balance: newBalance });
	return userDto(user)
}


module.exports = updateBalance