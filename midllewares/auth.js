const { Unauthorized } = require('http-errors')
const jwt = require('jsonwebtoken')
const { User } = require('../models')
const { SECRET_KEY } = process.env

const auth = async (req, res, next) => {
  const { authorization = '' } = req.headers
  const [bearer, token] = authorization.split(' ')

  if (bearer !== 'Bearer') {
    throw Unauthorized('User is not authorized')
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY)
    const user = await User.findById(id)
    if (!user) {
      throw Unauthorized('User is not authorized')
    }
    req.user = user
    next()
  } catch (error) {
    if (error.message === 'Invalid signature') {
      error.status = 401
    }
  }
}

module.exports = auth
