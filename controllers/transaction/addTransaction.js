const TransactionRepo = require("../../repositories/transaction");


const addTransaction = async (req, res) => {
  const result = await TransactionRepo.addTransaction({
    ...req.body,
    user: req.user.id,
  });
  return res.Created({ result });
};

module.exports = addTransaction;

