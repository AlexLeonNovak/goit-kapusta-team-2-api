const Joi = require('joi');

const updateBalance = Joi.object({
	balance: Joi.number().required()
})

module.exports = {
	updateBalance
}
