require('dotenv').config()

//= ==========================================
// CONFIG INITIALIZATION
//= ==========================================

const CONFIG = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || '3000',
  BASE_URL: process.env.BASE_URL,
  PUBLIC_URL: process.env.PUBLIC_URL,
  MYSQL_DB: process.env.MYSQL_DB,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASS: process.env.MYSQL_PASS,
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_PORT: process.env.MYSQL_PORT,
  MYSQL_USERS: process.env.MYSQL_USERS,
  MYSQL_PAYMENTS: process.env.MYSQL_PAYMENTS,
  MYSQL_USER_GAMES: process.env.MYSQL_USER_GAMES,
  RECAPTCHA_KEY: process.env.RECAPTCHA_KEY
}

module.exports = CONFIG
