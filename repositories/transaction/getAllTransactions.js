const Transaction = require("../../model/transactions/model");

const getAllTransactions = async () => {
    return Transaction.find({})
      .populate('category');
};

module.exports = getAllTransactions;
