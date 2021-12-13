const { User } = require('../../models')
const { NotFound } = require('http-errors')

const updateUserSubscribtion = async (req, res) => {
  const { _id } = req.params
  const { subscription } = req.body
  const result = await User.findByIdAndUpdate(_id, { subscription }, { new: true })
  if (!result) {
    throw NotFound('User not found')
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = updateUserSubscribtion
