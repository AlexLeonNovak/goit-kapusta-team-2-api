const Joi = require("joi");

const createTransaction = Joi.object({
    datetime: Joi.string().required(),
    description: Joi.string(),
    category: Joi.string().required(),
    wallet: Joi.string().required(),
    amount: Joi.number().required(),
});

module.exports = createTransaction;