const nodemailer = require('nodemailer')
require('dotenv').config()

const { META_PASSWORD } = process.env

const nodemailerConfig = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'sonata.kh@meta.ua',
    pass: META_PASSWORD
  }
}

const transporter = nodemailer.createTransport(nodemailerConfig)

const email = {
  to: 'sorokina.natalia.kh@gmail.com',
  from: 'sonata.kh@meta.ua',
  subject: 'New application from the site',
  html: '<p>A new application came from the site</p>'
}

transporter.sendMail(email)
  .then(() => console.log('Email send success'))
  .catch(error => console.log(error.message))
