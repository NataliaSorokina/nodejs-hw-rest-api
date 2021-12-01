const express = require('express')
const router = express.Router()
const { contacts } = require('../../controllers/index')
const { validation, ctrlWrapper } = require('../../midllewares/index')
const { contactSchema } = require('../../schemas/index')

const validateMiddlewares = validation(contactSchema)

router.get('/', ctrlWrapper(contacts.getContacts))

router.get('/:contactId', ctrlWrapper(contacts.getContactById))

router.post('/', validateMiddlewares, ctrlWrapper(contacts.addNewContact))

router.delete('/:contactId', ctrlWrapper(contacts.deleteContact))

router.put('/:contactId', validateMiddlewares, ctrlWrapper(contacts.changeContact))

module.exports = router
