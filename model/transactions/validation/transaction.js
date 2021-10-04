const Joi = require("joi");

const joiTransactionSchema = Joi.object({
    datetime: Joi.string().required(),
    description:Joi.string(),
    categoryId: Joi.string().required(),
    amount:Joi.string().required(),
});

module.exports = joiTransactionSchema;