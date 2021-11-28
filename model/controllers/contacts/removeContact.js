const listContacts = require('./listContacts')
const updateContacts = require('./updateContacts')

async function removeContact(id) {
  const contacts = await listContacts()
  const idx = contacts.findIndex(item => item.id === id)
  if (idx === -1) {
    return null
  }
  const newContacts = contacts.filter(contact => contact.id !== id)
  await updateContacts(newContacts)
  return contacts[idx]
};

module.exports = removeContact
