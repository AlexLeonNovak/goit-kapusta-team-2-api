const UserRepo = require('../../repositories/user')

const login = async (req, res) => {
		const {email, password} = req.body;
		const userInfo = await UserRepo.login(email, password);
		return res.OK({...userInfo});
}

module.exports = login;
