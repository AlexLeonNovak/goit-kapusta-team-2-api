const Transaction = require("../../model/transactions/model");
const {categoryTypes} = require('../../helpers/constants');

const addTransaction = async (dataTransaction) => {

  let transaction = await Transaction.create(dataTransaction);
  transaction = await transaction
    .populate('category')
    .populate({ path:'user', select: '-accessToken -passwordHash'})
    .execPopulate();

  console.log(transaction.user.balance);

  if (transaction.category.type === categoryTypes.INCOME) {
    transaction.user.balance += transaction.amount;
  } else {
    transaction.user.balance -= transaction.amount;
  }
  await transaction.user.save();

  return transaction;

};

module.exports = addTransaction;
