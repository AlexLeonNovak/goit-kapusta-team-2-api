// const Transaction = require("../../model/transactions/model");
// const User = require('../../model/users/model');
// const {categoryTypes} = require('../../helpers/constants');

// const addTransaction = async (dataTransaction) => {

//   let transaction = await Transaction.create(dataTransaction);
//   transaction = await Transaction.findOne({_id: transaction._id})
//     .populate('categories');
//     console.log(transaction);

//   const user = await User.findOne({_id: dataTransaction.user});
// console.log(dataTransaction.amount);
// console.log(user.balance);
//   if (transaction.category.type === categoryTypes.INCOME) {
//     user.balance += dataTransaction.amount;
//   } else {
//     user.balance -= dataTransaction.amount;
//   }
//   await user.save();

//   return {
//     transaction,
//     userBalance: user.balance
//   }

// };

// module.exports = addTransaction;

const Transaction = require("../../model/transactions/model");
const User = require("../../model/users/model");
const { categoryTypes } = require("../../helpers/constants");
const Category = require("../../model/categories/model");

const addTransaction = async (dataTransaction) => {
  const transaction = await Transaction.create(dataTransaction);
  const { _id } = transaction;
  const dataCategory = await Category.findById(dataTransaction.categoryId);
  await Transaction.findByIdAndUpdate(_id, { category: dataCategory });
  const newTransaction = await Transaction.findById(_id);

  const user = await User.findOne({ _id: dataTransaction.user });
  if (newTransaction.category.type === categoryTypes.INCOME) {
    user.balance += dataTransaction.amount;
  } else {
    user.balance -= dataTransaction.amount;
  }
  await user.save();

  return {
    newTransaction,
    userBalance: user.balance,
  };
};

module.exports = addTransaction;
