const TransactionRepo = require("../../repositories/transaction");

const getAllTransactions = async (__, res) => {
  const transactions = await TransactionRepo.getAllTransactions();
  return res.OK({...transactions});
};

module.exports = getAllTransactions;