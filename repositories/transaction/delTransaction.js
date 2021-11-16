const Transaction = require("../../model/transactions/model");
const {categoryTypes} = require('../../helpers/constants');

const delTransaction = async (transactionId) => {
  const transaction = await Transaction.findById(transactionId)
    .populate('wallet');

  if (transaction.category.type === categoryTypes.INCOME) {
    transaction.wallet.balance -= transaction.amount;
  } else {
    transaction.wallet.balance += transaction.amount;
  }
  await transaction.wallet.save();
  await transaction.delete();
  return transaction;
};

module.exports = delTransaction;
