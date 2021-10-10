const TransactionRepo = require("../../repositories/transaction");

const getTransactionSummary = async (req, res) => {
	const summary = await TransactionRepo.getTransactionSummary(req.user.id);
	return res.OK({summary});
}

module.exports = getTransactionSummary;
