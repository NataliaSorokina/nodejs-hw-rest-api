const express = require('express')

const { contacts } = require('../../controllers/index')
const { validation, ctrlWrapper } = require('../../midllewares/index')

const router = express.Router()
const { joiSchema, favoriteJoiSchema } = require('../../models/contacts')

router.get('/', ctrlWrapper(contacts.getContacts))

router.get('/:contactId', ctrlWrapper(contacts.getContactById))

router.post('/', validation(joiSchema), ctrlWrapper(contacts.addNewContact))

router.delete('/:contactId', ctrlWrapper(contacts.deleteContact))

router.put('/:contactId', validation(joiSchema), ctrlWrapper(contacts.changeContact))

router.patch('/:contactId/favorite', validation(favoriteJoiSchema), ctrlWrapper(contacts.updateStatusContact))

module.exports = router
