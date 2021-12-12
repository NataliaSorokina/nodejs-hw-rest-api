const { Conflict } = require('http-errors')
// const bcrypt = require('bcryptjs')
const { User } = require('../../models')

const signup = async (req, res) => {
  const { name, password, email } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw Conflict(`E-mail ${email} is already in use`)
  }
  // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  // await User.create({ name, password: hashPassword, email })
  const newUser = new User({ name, email })
  newUser.setPassword(password)
  newUser.save()

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email,
        password
      }
    }
  })
}

module.exports = signup
