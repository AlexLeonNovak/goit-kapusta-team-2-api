const TransactionRepo = require("../../repositories/transaction");

const delTransaction = async (req, res, next) => {
  const { transactionId } = req.params;
  await TransactionRepo.delTransaction(transactionId);
  return res.NoContent();
};

module.exports = delTransaction;