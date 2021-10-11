const { OAuth2Client } = require('google-auth-library')
const jwt = require('jsonwebtoken');
const { nanoid } = require('nanoid');

const User = require('../../model/users/model');
const userDto = require('../../dtos/user');
const addBasicCategories = require("../category/addBasicCategories");


const {GOOGLE_CLIENT_ID, JWT_ACCESS_SECRET} = process.env;

const googleAuth = async (tokenId) => {
	const client = new OAuth2Client(GOOGLE_CLIENT_ID);
	const ticket = await client.verifyIdToken({
		idToken: tokenId,
		audience: GOOGLE_CLIENT_ID
	});

	const { email } = ticket.getPayload();
	let user = await User.findOne({email});
	if (!user) {
		const password = nanoid(32);
		user = new User({email});
		user.setPassword(password);
		await user.save();
	}

	const userData = userDto(user);
	const token = jwt.sign(userData, JWT_ACCESS_SECRET);
	user.accessToken = token;
	await user.save();
	
	await addBasicCategories(user.id);

    
	return {
		user: userData,
		token
	}
}

module.exports = googleAuth;
