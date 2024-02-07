const HttpException = require('../utils/HttpException')
const sendMessage = require('../remotes/sendMessage.remote')

module.exports = async (error, req, res, next) => {
	if (error instanceof HttpException) {
		res.status(error.status).send({
			message: error.message,
			data: error.data
		})
		return
	}

	await sendMessage(process.env.TELEGRAM_CHAT_ID,
		`🚧 Error 500 in ||${req.originalUrl}||\n
		\`${error.toString()}\` \n
		\`\`\` ${error.stack}\`\`\` `)
	res.status(500).json({
		message: 'Internal Server Error',
		data: error.message,
		stack: error.stack
	})
}
