const listContacts = require('./listContacts')

async function getById(id) {
  const contacts = await listContacts()
  const contactById = contacts.find(contact => contact.id === id)
  // const idx = contacts.findIndex(contact => JSON.stringify(contact.id) === id)
  if (!contactById) {
    return
  }
  return contactById
};

module.exports = getById
