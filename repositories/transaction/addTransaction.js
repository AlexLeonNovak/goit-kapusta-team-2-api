const Transaction = require("../../model/transactions/model");
const {categoryTypes} = require('../../helpers/constants');

const addTransaction = async (dataTransaction) => {

  let transaction = await Transaction.create(dataTransaction);
  transaction = await transaction
    .populate('category')
    .populate('wallet')
    .populate({ path:'user', select: '-accessToken -passwordHash'})
    .execPopulate();


  if (transaction.category.type === categoryTypes.INCOME) {
    transaction.wallet.balance += transaction.amount;
  } else {
    transaction.wallet.balance -= transaction.amount;
  }
  await transaction.wallet.save();

  return transaction;

};

module.exports = addTransaction;
