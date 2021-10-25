const WalletRepo = require("../../repositories/wallet");

const addWallet = async (req, res) => {
  const result = await WalletRepo.addWallet({
    ...req.body,
    user: req.user.id,
  });

  return res.Created({ result });
};

module.exports = addWallet;
