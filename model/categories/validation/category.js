const Joi = require("joi");

const joiCategorySchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().valid("income", "expense").insensitive().required(),
});

module.exports = {
  joiCategorySchema,
};
