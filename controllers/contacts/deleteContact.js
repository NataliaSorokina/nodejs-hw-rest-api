const { Contact } = require('../../models/')
const { NotFound } = require('http-errors')

const deleteContact = async (req, res) => {
  const { contactId } = req.params
  const result = await Contact.findByIdAndRemove(contactId)
  if (!result) {
    throw NotFound(`Contact with id=${contactId} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    message: `Contact with id=${contactId} deleted`,
    data: {
      result
    }
  })
}

module.exports = deleteContact
