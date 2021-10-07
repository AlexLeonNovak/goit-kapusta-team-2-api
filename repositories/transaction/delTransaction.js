const Transaction = require("../../model/transactions/model");

const delTransaction = async (transactionId) => {
  return await Transaction.findByIdAndDelete(transactionId);
};

module.exports = delTransaction;
