const listContacts = require('./listContacts')
const updateContacts = require('./updateContacts')

async function removeContact(id) {
  const contacts = await listContacts()
  const idx = contacts.findIndex(contact => contact.id === id)
  // const idx = contacts.findIndex(contact => JSON.stringify(contact.id) === id)
  if (idx === -1) {
    return null
  }
  const newContacts = contacts.filter((_, index) => index !== idx)
  await updateContacts(newContacts)
  return contacts[idx]
};

module.exports = removeContact
