const WalletRepo = require("../../repositories/wallet");

const addWallet = async (req, res) => {
  const wallet = await WalletRepo.addWallet({
    ...req.body,
    user: req.user.id,
  });

  return res.Created({ wallet });
};

module.exports = addWallet;
