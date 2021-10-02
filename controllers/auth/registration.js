const UserRepo = require('../../repositories/user')

const registration = async (req, res) => {
		const {email, password} = req.body;
		const user = await UserRepo.registration(email, password);
		return res.Created({user});
}

module.exports = registration;
