const UserRepo = require('../../repositories/user')

const logout = async (req, res) => {
		const {id} = req.user;
		await UserRepo.logout(id);
		return res.NoContent();
}

module.exports = logout;
