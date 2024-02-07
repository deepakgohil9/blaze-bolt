const mongoose = require('mongoose')

module.exports = async () => {
	try {
		await mongoose.connect(process.env.MONGO)

		// eslint-disable-next-line no-console
		console.log('🔗 Connected to Database!')
	} catch (error) {
		throw new Error(error.message)
	}
}
