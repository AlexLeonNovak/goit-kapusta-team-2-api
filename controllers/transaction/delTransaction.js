const TransactionRepo = require("../../repositories/transaction");

const delTransaction = async (req, res) => {
  const { transactionId } = req.params;
  const transaction = await TransactionRepo.delTransaction(transactionId);
  return res.OK({transaction});
};

module.exports = delTransaction;
