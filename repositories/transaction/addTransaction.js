const Transaction = require("../../model/transactions/model");
const User = require('../../model/users/model'); 


const addTransaction = async (balance, newTransactions) => {
const {owner, amount} = newTransactions;
  await User.findByIdAndUpdate(owner, { balance: balance + amount }); 
  return await Transaction.create(newTransactions);

};

module.exports = addTransaction;