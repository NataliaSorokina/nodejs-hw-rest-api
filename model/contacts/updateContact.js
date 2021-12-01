const listContacts = require('./listContacts')
const updateContacts = require('./updateContacts')

async function updateContact(id, body) {
  const contacts = await listContacts()
  const idx = contacts.findIndex(contact => JSON.stringify(contact.id) === id)
  // const idx = contacts.findIndex(contact => contact.id === id)
  if (idx === -1) {
    return null
  }
  contacts[idx] = { id, ...body }
  await updateContacts(contacts)
  return contacts[idx]
}

module.exports = updateContact
