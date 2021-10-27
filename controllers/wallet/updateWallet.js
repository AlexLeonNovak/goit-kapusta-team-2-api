const WalletRepo = require("../../repositories/wallet");

const updateWallet = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
    const newWallet = await WalletRepo.updateWallet(id, body);
    return res.OK({ newWallet });
};

module.exports = updateWallet;
