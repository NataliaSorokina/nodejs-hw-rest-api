const signup = require('./signup')
const login = require('./login')
const logout = require('./logout')
const getCurrent = require('./getCurrent')
const updateUserSubscribtion = require('./updateUserSubscribtion')
const updateAvatar = require('./updateAvatar')
const verifyEmail = require('./verifyEmail')
const reverifyEmail = require('./reverifyEmail')

module.exports = {
  signup,
  login,
  logout,
  getCurrent,
  updateUserSubscribtion,
  updateAvatar,
  verifyEmail,
  reverifyEmail
}
