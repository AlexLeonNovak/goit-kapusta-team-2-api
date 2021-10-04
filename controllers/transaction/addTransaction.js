const TransactionRepo = require("../../repositories/transaction");


const addTransaction = async (req, res) => {
  const result = await TransactionRepo.addTransaction(req.user.balance, {
    ...req.body,
    owner: req.user.id,
  });
  return res.Created({ result });
};

module.exports = addTransaction;
