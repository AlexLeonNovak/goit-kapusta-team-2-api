const Wallet = require("../../model/wallets/model");

const addWallet = async (dataWallet) => {
  return await Wallet.create(dataWallet);
};

module.exports = addWallet;
