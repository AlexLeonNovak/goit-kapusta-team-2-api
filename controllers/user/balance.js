const UserRepo = require('../../repositories/user');

const balance = async (req, res) => {
    const { balance } = req.body;
    const user = await UserRepo.updateBalance(req.user.id, balance);
    return res.OK({ user });
}
module.exports = balance;
