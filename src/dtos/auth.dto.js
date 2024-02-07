const Joi = require('joi')

const auth = {
	body: Joi.object().keys({
		email: Joi.string().email().required(),
		password: Joi.string().min(8).required()
	}),
	query: Joi.object().keys({}),
	params: Joi.object().keys({})
}

module.exports = { auth }
