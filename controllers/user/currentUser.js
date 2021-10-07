const UserRepo = require('../../repositories/user');

const currentUser = async (req, res) => {
    const { token } = req.body;
    const userInfo = await UserRepo.getByToken(token);
    return res.OK({ userInfo });
}
module.exports = currentUser;