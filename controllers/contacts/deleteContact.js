const { removeContact } = require('../../model/contacts/index')
const { NotFound } = require('http-errors')

const deleteContact = async (req, res) => {
  const { contactId } = req.params
  const result = await removeContact(contactId)
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
