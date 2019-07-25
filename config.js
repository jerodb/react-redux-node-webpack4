// ************************
// CONFIG INITIALIZATION
// ************************

require('dotenv').config()

const {
  BASE_URL, HOST, NODE_ENV, PORT, RECAPTCHA_KEY,
  AUTH_CLIENT_ID, AUTH_DOMAIN, AUTH_RESPONSE_TYPE, AUTH_REDIRECT_URI, AUTH_SCOPE,
  MYSQL_DB, MYSQL_USER, MYSQL_PASS, MYSQL_HOST, MYSQL_PORT
} = process.env

const baseUrl = BASE_URL || '/'
const host = HOST || 'http://localhost:3000'
const uri = `${host}${baseUrl}`

const config = {
  BASE_URL: baseUrl,
  NODE_ENV: NODE_ENV || 'development',
  HOST: host,
  IMAGES_URL: `${uri}images/`,
  PORT: PORT || '3000',

  RECAPTCHA_KEY,

  AUTH_CLIENT_ID,
  AUTH_DOMAIN,
  AUTH_RESPONSE_TYPE,
  AUTH_REDIRECT_URI,
  AUTH_SCOPE,

  MYSQL_DB,
  MYSQL_USER,
  MYSQL_PASS,
  MYSQL_HOST,
  MYSQL_PORT,
}

module.exports = config
