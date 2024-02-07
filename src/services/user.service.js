const User = require('../models/user.model')

const createUser = async (data) => {
	const user = User(data)
	await user.save()
	return user
}

const findUserByEmail = async (data) => {
	const user = await User.findOne({
		email: data
	})
	return user
}

module.exports = {
	createUser,
	findUserByEmail
}
