const Transaction = require("../../model/transactions/model");


const addTransaction = async (newTransactions) => {
  return await Transaction.create(newTransactions);

};

module.exports = addTransaction;