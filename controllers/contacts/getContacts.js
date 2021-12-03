const { listContacts } = require('../../model/contacts/index')

const getContacts = async (req, res) => {
  const contacts = await listContacts()
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contacts
    }
  })
}

module.exports = getContacts
