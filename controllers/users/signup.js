const { Conflict } = require('http-errors')
const gravatar = require('gravatar')
const { nanoid } = require('nanoid')
const { sendEmail } = require('../../helpers/sendEmail')
const { User } = require('../../models')

const signup = async (req, res) => {
  const { name, password, email } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw Conflict(`E-mail ${email} is already in use`)
  }
  const avatarURL = gravatar.url(email)
  const verificationToken = nanoid()

  const newUser = new User({ name, email, avatarURL, verificationToken })
  newUser.setPassword(password)
  await newUser.save()

  const mail = {
    to: email,
    subject: 'Сonfirmation mail',
    html: `<a target='_blank' href='http://localhost:3000/api/users/verify/${verificationToken}>Сonfirm email</a>`
  }

  await sendEmail(mail)

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        name,
        email,
        avatarURL,
        verificationToken,
        password
      }
    }
  })
}

module.exports = signup
