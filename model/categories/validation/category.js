const Joi = require("joi");

const joiCategorySchema = Joi.object({
    name: Joi.string().required(),
    type: Joi.string().required(),
    logo: Joi.string(),
});

module.exports = {
	joiCategorySchema
}