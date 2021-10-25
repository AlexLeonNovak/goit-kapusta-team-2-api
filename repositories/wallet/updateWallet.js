const Wallet = require("../../model/wallets/model");

const updateWallet = async (id, body) => {
  return await Wallet.findByIdAndUpdate(id, body, {
    new: true,
  });
};

module.exports = updateWallet;
