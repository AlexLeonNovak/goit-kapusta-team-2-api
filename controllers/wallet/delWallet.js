const WalletRepo = require("../../repositories/wallet");

const delWallet = async (req, res) => {
    const { id } = req.params;
    const wallet = await WalletRepo.delWallet(id);
    return res.OK({wallet});
};

module.exports = delWallet;
