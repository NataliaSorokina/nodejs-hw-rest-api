const express = require('express')
const { users } = require('../../controllers')
const { validation, ctrlWrapper } = require('../../midllewares')
const router = express.Router()
const { joiSignupSchema } = require('../../models/user')

router.post('/signup', validation(joiSignupSchema), ctrlWrapper(users.signup))

module.exports = router
