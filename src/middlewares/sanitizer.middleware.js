const mongoSanitizer = require('express-mongo-sanitize')
const HttpException = require('../utils/HttpException')
const httpErrors = require('../utils/httpErrors')

module.exports = mongoSanitizer({
	allowDots: true,
	onSanitize: ({ req, key }) => {
		throw new HttpException(httpErrors.BAD_REQUEST, `🛑 Uh-oh! Potential injection detected in request ${key}! Request dropped like a mic 🎤.`)
	}
})
