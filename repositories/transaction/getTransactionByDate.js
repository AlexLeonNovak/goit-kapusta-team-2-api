const Transaction = require("../../model/transactions/model"); 
 
const getTransactionByDate = async (transactionDate) => { 
    const allTransactions = await Transaction.find({}) 
   return await allTransactions.filter(allTransaction =>  
       allTransaction.datetime.includes(transactionDate)) 
}; 
 
module.exports = getTransactionByDate;