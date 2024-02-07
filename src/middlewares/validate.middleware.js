const HttpException = require('../utils/HttpException')
const httpErrors = require('../utils/httpErrors')

module.exports = (dto) => {
	return async (req, res, next) => {
		try {
			const values = await Promise.all([
				dto.body.validateAsync(req.body),
				dto.query.validateAsync(req.query),
				dto.params.validateAsync(req.params)
			])
			req.body = values[0]
			req.query = values[1]
			req.params = values[2]
			next()
		} catch (error) {
			next(new HttpException(httpErrors.BAD_REQUEST, error.message))
		}
	}
}
