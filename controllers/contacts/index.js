const getContacts = require('./getContacts')
const getContactById = require('./getContactById')
const deleteContact = require('./deleteContact')
const addNewContact = require('./addNewContact')
const changeContact = require('./changeContact')
const updateContactStatus = require('./updateContactStatus')

module.exports = {
  getContacts,
  getContactById,
  deleteContact,
  addNewContact,
  changeContact,
  updateContactStatus
}
