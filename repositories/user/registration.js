const User = require('../../model/users/model');
const ErrorException = require('../../exceptions/error.exception');
const userDto = require('../../dtos/user');
const fs = require("fs/promises");
const path = require("path");
const gravatar = require("gravatar");
const avatarDir = path.join(__dirname, "../../", "uploads/avatars");



const registration = async (email, password) => {
	const candidate = await User.findOne({email})
	const defaultAvatar = gravatar.url(email.toString(), { s: "250" }, true);
	if (candidate) {
		throw ErrorException.BadRequest('User registered already');
	}
	const user = new User({email,
		    avatar: `${defaultAvatar}`,
		   });
	user.setPassword(password);
	await user.save();

	const id = user._id.toString();
	const dirPath = path.join(avatarDir, id);
	await fs.mkdir(dirPath);

	return userDto(user);
}

module.exports = registration;
