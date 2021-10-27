const Joi = require("joi");

const updateWalletData = Joi.object({
  name: Joi.string(),
  balance: Joi.number().required(),
  favorite: Joi.boolean(),
});

module.exports = updateWalletData;
