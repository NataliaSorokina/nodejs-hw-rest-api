const { Schema, model } = require('mongoose')
const Joi = require('joi')
const bcrypt = require('bcryptjs')

const userSchema = Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ['starter', 'pro', 'business'],
    default: 'starter'
  },
  token: {
    type: String,
    default: null,
  },
}, { versionKey: false, timestamps: true })

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

const joiSignupSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required(),
  subscription: Joi.string().valid('starter', 'pro', 'business'),
  token: Joi.boolean()
})

const joiLoginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
})

const User = model('user', userSchema)

module.exports = {
  User,
  joiSignupSchema,
  joiLoginSchema
}
