const Wallet = require("../../model/wallets/model");

const getWallets = async (id) => {
  return await Wallet.find({ user: id });
};

module.exports = getWallets;
