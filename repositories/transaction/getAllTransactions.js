const Transaction = require("../../model/transactions/model");

const getAllTransactions = async (user, query) => {
    const currentDate = new Date();
    let {
        limit = 0,
        offset = 0,
        month = currentDate.getMonth() + 1,
        year = currentDate.getFullYear(),
        sort = 'DESC'
    } = query;

    limit = Number(limit);
    offset = Number(offset);
    month = ('0' + month).slice(-2);
    year = Number(year);

    // const transactions = await Transaction.find({
    //     user,
    //     datetime: { $regex: `${year}-${month}.*`}
    // })
    //   .populate('category')
    //   .skip(Number(offset))
    //   .limit(Number(limit))
    // ;
    //
    // const total = await Transaction.find({
    //     user,
    //     datetime: { $regex: `${year}-${month}.*`}
    // }).count();

    const transAggregate = await Transaction.aggregate([
        { $match: { user, datetime: { $regex: `${year}-${month}.*`} } },
        {
            $lookup: {
                from: "categories",
                localField: "category",
                foreignField: "_id",
                as: "category"
            }
        },
        {
            $set: {
                category: {
                    $arrayElemAt: [ '$category', 0 ]
                },
            }
        },
        { $sort: { datetime: sort.toUpperCase() === 'DESC' ? -1 : 1 } },
        {
            $facet: {
                meta: [ { $count: 'total' }],
                data: limit ? [
                    { $skip: offset },
                    { $limit: limit }
                ] : []
            }
        },
    ]);

    const {data: transactions, meta } = transAggregate[0];
    return {
        transactions,
        total: meta[0]?.total || 0,
        month,
        year,
        limit,
        offset,
    }
};

module.exports = getAllTransactions;
