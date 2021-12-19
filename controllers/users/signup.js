const { Conflict } = require('http-errors')
const gravatar = require('gravatar')
const { User } = require('../../models')

const signup = async (req, res) => {
  const { name, password, email } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw Conflict(`E-mail ${email} is already in use`)
  }
  const avatarURL = gravatar.url(email)

  const newUser = new User({ name, email, avatarURL })
  newUser.setPassword(password)
  newUser.save()

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        name,
        email,
        avatarURL,
        password
      }
    }
  })
}

module.exports = signup
