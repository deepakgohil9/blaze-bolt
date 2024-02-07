class ApiResponse {
	constructor (message, data = null) {
		this.message = message
		this.data = data
	}
}

module.exports = ApiResponse
