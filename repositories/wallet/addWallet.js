const Wallet = require("../../model/wallets/model");

const addWallet = async (dataWallet) => {
  const wallet = await Wallet.create(dataWallet);
  return wallet;
};

module.exports = addWallet;
