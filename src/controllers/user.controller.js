const jwt = require('jsonwebtoken')
const userService = require('../services/user.service')
const ApiResponse = require('../utils/ApiResponse')
const HttpException = require('../utils/HttpException')
const httpErrors = require('../utils/httpErrors')

const signup = async (req, res, next) => {
	try {
		const user = await userService.createUser(req.body)
		const { password, ...data } = user.toObject()

		res.status(201).json(new ApiResponse('User Created!', data))
	} catch (error) {
		next(error)
	}
}

const login = async (req, res, next) => {
	try {
		const user = await userService.findUserByEmail(req.body.email)
		if (!user) {
			throw new HttpException(httpErrors.NOT_FOUND, 'User not found')
		}

		const match = await user.comparePassword(req.body.password)
		if (!match) {
			throw new HttpException(httpErrors.UNAUTHORIZED, 'Password not match')
		}

		const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_SECRET)

		res.send(new ApiResponse('User logged in successfully!', { accessToken }))
	} catch (error) {
		next(error)
	}
}

module.exports = {
	signup,
	login
}
