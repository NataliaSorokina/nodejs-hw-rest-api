const { User } = require('../../models')
const { Unauthorized, BadRequest } = require('http-errors')
const { sendEmail } = require('../../helpers/sendEmail')

const reverifyEmail = async (req, res) => {
  const { email } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    throw Unauthorized(`User with e-mail ${email} is not registered`)
  }
  if (user.verify) {
    throw BadRequest('Verification has already been passed')
  }
  const mail = {
    to: email,
    subject: 'Сonfirmation mail',
    html: `<a target='_blank' href='http://localhost:3000/api/users/verify/${user.verificationToken}>Сonfirm email</a>`
  }
  await sendEmail(mail)

  res.status(200).json({
    status: 'success',
    code: 200,
    message: 'Verification email sent'
  })
}

module.exports = reverifyEmail
