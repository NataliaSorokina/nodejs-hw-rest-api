const { getById } = require('../../model/contacts/index')
const { NotFound } = require('http-errors')

const getContactById = async (req, res) => {
  const { contactId } = req.params
  const contactById = await getById(contactId)
  if (!contactById) {
    throw NotFound(`Contact with id=${contactId} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contactById
    }
  })
}

module.exports = getContactById
