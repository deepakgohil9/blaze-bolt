class HttpException extends Error {
	constructor (httpError, data = null) {
		super(httpError.message)
		this.status = httpError.status
		this.message = httpError.message
		this.data = data
	}
}

module.exports = HttpException
