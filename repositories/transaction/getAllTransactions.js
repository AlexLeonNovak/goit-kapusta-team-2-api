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
    month = Number(month);
    year = Number(year);

    const matchDate = new Date(year, month - 1, 2);
    console.log('matchDate', matchDate.toString())
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
    console.log(user);
    const transAggregate = await Transaction.aggregate([
        {
            $match: {
                user,
                $expr: {
                    $and: [
                        { $eq: [{ $year: '$datetime' }, { $year: matchDate }] },
                        { $eq: [{ $month: '$datetime' }, { $month: matchDate }] },
                    ]
                }

            }
        },
        {
            $lookup: {
                from: "categories",
                localField: "category",
                foreignField: "_id",
                as: "category"
            }
        },
        { $unwind: '$category' },
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
    console.log('transAggregate', transAggregate);
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
