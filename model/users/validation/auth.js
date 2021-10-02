const Joi = require('joi');

const {emailRegex} = require('../../../helpers/constants');

const emailSchema = Joi.string().email().pattern(new RegExp(emailRegex)).required();

const registrationAndLogin = Joi.object({
	password: Joi.string().min(6).required(),
	email: emailSchema,
	avatar: Joi.string(),
});

module.exports = {
	registrationAndLogin
}
