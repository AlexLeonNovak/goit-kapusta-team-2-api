const Joi = require("joi");

const joiCategorySchema = Joi.object({
    name: Joi.string().required(),
    type: Joi.string().required(),
});

module.exports = {
	joiCategorySchema
}