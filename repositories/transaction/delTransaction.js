const Transaction = require("../../model/transactions/model");
const Wallet = require("../../model/wallets/model");
const Category = require("../../model/categories/model");
const {categoryTypes} = require('../../helpers/constants');


const delTransaction = async (transactionId) => {
  const transaction = await Transaction.findById(transactionId);
  const wallet = await Wallet.findById(transaction.wallet);
  const categoryTapes = await Category.findById(transaction.category);
  if (categoryTapes.type === categoryTypes.INCOME) {
    wallet.balance -= transaction.amount;
  } 
  else {
    wallet.balance += transaction.amount;
  }
  await wallet.save();

  return await Transaction.findByIdAndDelete(transactionId);
};

module.exports = delTransaction;
