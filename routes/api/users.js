const express = require('express')
const { users } = require('../../controllers')
const { validation, ctrlWrapper } = require('../../midllewares')
const router = express.Router()
const { joiSignupSchema, joiLoginSchema } = require('../../models/user')

router.post('/signup', validation(joiSignupSchema), ctrlWrapper(users.signup))
router.post('/login', validation(joiLoginSchema), ctrlWrapper(users.login))

module.exports = router
