const TransactionRepo = require("../../repositories/transaction"); 
 
const getTransactionByDate = async (req, res) => { 
    const { transactionDate } = req.params; 
 
  const transactions = await TransactionRepo.getTransactionByDate(transactionDate); 
  return res.OK({...transactions}); 
}; 
 
module.exports = getTransactionByDate;