const WalletRepo = require("../../repositories/wallet");

const getWallets = async (req, res) => {
  const wallets = await WalletRepo.getWallets(req.user.id, req.query);
  return res.OK({ ...wallets });
};

module.exports = getWallets;
