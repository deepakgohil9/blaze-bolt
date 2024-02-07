const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const user = mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
})

user.pre('save', async function (next) {
	try {
		if (!this.isModified('password')) {
			return next()
		}

		const salt = await bcrypt.genSalt(10)
		const hash = await bcrypt.hash(this.password, salt)

		this.password = hash
		return next()
	} catch (error) {
		return next(error)
	}
})

user.methods.comparePassword = function (password) {
	return bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('user', user)
