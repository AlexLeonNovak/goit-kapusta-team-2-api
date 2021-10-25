const Wallet = require("../../model/wallets/model");

const delWallet = async (id) => {
  return await Wallet.findByIdAndDelete(id);
};

module.exports = delWallet;
