const TransactionRepo = require("../../repositories/transaction");

const getAllTransactions = async (req, res) => {
  const transactions = await TransactionRepo
    .getAllTransactions(req.user.id, req.query);
  return res.OK({...transactions});
};

module.exports = getAllTransactions;
