const express = require('express')
const { users } = require('../../controllers')
const { validation, ctrlWrapper, auth, upload } = require('../../midllewares')
const router = express.Router()
const { joiSignupSchema, joiLoginSchema, joiSubscriptionSchema, joiReverificationSchema } = require('../../models/user')

router.post('/signup', validation(joiSignupSchema), ctrlWrapper(users.signup))
router.post('/login', validation(joiLoginSchema), ctrlWrapper(users.login))
router.get('/logout', auth, ctrlWrapper(users.logout))
router.get('/current', auth, ctrlWrapper(users.getCurrent))
router.patch('/:_id/subscription', validation(joiSubscriptionSchema), ctrlWrapper(users.updateUserSubscribtion))
router.patch('/avatar', auth, upload.single('avatar'), ctrlWrapper(users.updateAvatar))
router.get('/verify/:verificationToken', ctrlWrapper(users.verifyEmail))
router.post('/verify', validation(joiReverificationSchema), ctrlWrapper(users.reverifyEmail))

module.exports = router
