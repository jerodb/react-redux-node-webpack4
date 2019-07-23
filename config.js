require('dotenv').config()

//= ==========================================
// CONFIG INITIALIZATION
//= ==========================================

const CONFIG = {
  BASE_URL: process.env.BASE_URL || '/',
  ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '',
  IMAGES: `${process.env.HOST}${process.env.BASE_URL}images/`,
  MYSQL_DB: process.env.MYSQL_DB,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASS: process.env.MYSQL_PASS,
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_PORT: process.env.MYSQL_PORT,
  PORT: process.env.PORT || '3000',
  RECAPTCHA_KEY: process.env.RECAPTCHA_KEY || ''
}

module.exports = CONFIG
