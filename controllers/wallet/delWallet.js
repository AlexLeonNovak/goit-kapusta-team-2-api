const WalletRepo = require("../../repositories/wallet");

const delWallet = async (req, res) => {
    const { id } = req.params;
    await WalletRepo.delWallet(id);
    return res.NoContent();
};

module.exports = delWallet;