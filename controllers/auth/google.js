const UserRepo = require('../../repositories/user')

const google = async (req, res) => {
	const {tokenId} = req.body;
	const userInfo = await UserRepo.googleAuth(tokenId);
	return res.OK({...userInfo});
}

module.exports = google;
