const Joi = require("joi");

const createWallet = Joi.object({
  name: Joi.string().required(),
  balance: Joi.number().required(),
  favorite: Joi.boolean(),
});

module.exports = createWallet;
