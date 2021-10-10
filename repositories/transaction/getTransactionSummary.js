const Transaction = require("../../model/transactions/model");
const {categoryTypes} = require('../../helpers/constants');

const getTransactionSummary = async (user) => {
	return Transaction.aggregate([
		{$match: {user}},
		{
			$lookup: {
				from: "categories",
				localField: "category",
				foreignField: "_id",
				as: "category"
			}
		},
		{$unwind: '$category'},
		{
			$group: {
				_id: {
					year: {$year: "$datetime"},
					month: {$month: "$datetime"}
				},
				income: {$sum: {$cond: [{$eq: ['$category.type', categoryTypes.INCOME]}, '$amount', 0]}},
				expense: {$sum: {$cond: [{$eq: ['$category.type', categoryTypes.EXPENSE]}, '$amount', 0]}},
			}
		},
		{$replaceRoot: {newRoot: {$mergeObjects: ["$_id", "$$ROOT"]}}},
		{$project: {_id: 0}}
	]);
}

module.exports = getTransactionSummary;
