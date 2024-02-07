const jwt = require('jsonwebtoken')
const HttpException = require('../utils/HttpException')
const httpErrors = require('../utils/httpErrors')

module.exports = async (req, res, next) => {
	try {
		if (!req.headers.authorization) {
			throw new HttpException(httpErrors.UNAUTHORIZED, 'Please Log In')
		}

		const accessToken = req.headers.authorization.replace(/^Bearer\s/, '')

		req.user = jwt.verify(accessToken, process.env.ACCESS_SECRET)
		next()
	} catch (error) {
		next(error)
	}
}
