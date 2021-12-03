const { addContact } = require('../../model/contacts/index')

const addNewContact = async (req, res) => {
  const result = await addContact(req.body)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result
    }
  })
}

module.exports = addNewContact
