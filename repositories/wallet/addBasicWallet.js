const basicWallets = require("../../helpers/basicWallets.json");
const Wallet = require("../../model/wallets/model");

const addBasicWallet = async (id) => {
  const defaultCats = basicWallets.map((item) => ({ ...item, user: id }));
  await Wallet.create(defaultCats);
};
module.exports = addBasicWallet;
