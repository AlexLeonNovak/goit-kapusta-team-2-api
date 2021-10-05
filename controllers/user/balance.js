const UserRepo = require('../../repositories/user');

const balance = async (req, res) => {
    const { newBalance } = req.body;
    const userInfo = await UserRepo.updateBalance(
        newBalance,
        req.user.id);
    return res.OK({ userInfo });
}
module.exports = balance;