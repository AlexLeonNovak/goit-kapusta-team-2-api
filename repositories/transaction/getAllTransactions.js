const Transaction = require("../../model/transactions/model");

const getAllTransactions = async () => {
    return await Transaction.find({});
};

module.exports = getAllTransactions;