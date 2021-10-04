const TransactionRepo = require("../../repositories/transaction");

const delTransaction = async (req, res, next) => {
  const { transactionId } = req.params;
  if (!transactionId) {
    return res.NOT_FOUND();
  }
  const transaction = await TransactionRepo.delTransaction(transactionId);
  return res.NoContent({ transaction });
};

module.exports = delTransaction;