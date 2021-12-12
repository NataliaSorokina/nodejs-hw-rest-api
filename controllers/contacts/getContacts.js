const { Contact } = require('../../models')

const getContacts = async (req, res) => {
  const { _id } = req.user
  const { page = 1, limit = 4, favorite = 'false' } = req.query
  const skip = (page - 1) * limit
  if (favorite === 'true') {
    const result = await Contact.find({ owner: _id, favorite: true }, '', { skip, limit: Number(limit) }).populate('owner', '_id name email')
    res.json({
      status: 'success',
      code: 200,
      data: {
        result
      }
    })
  }
  const result = await Contact.find({ owner: _id }, '', { skip, limit: Number(limit) }).populate('owner', '_id name email')
  res.json({
    status: 'success',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = getContacts
