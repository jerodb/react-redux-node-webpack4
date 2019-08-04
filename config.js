// **********************
// CONFIG INITIALIZATION
// **********************
require('dotenv').config()

const AUTH_CONFIG = !process.env.AUTH_CLIENT_ID ? null : {
  domain: process.env.AUTH_DOMAIN,
  clientID: process.env.AUTH_CLIENT_ID,
  redirectUri: process.env.AUTH_REDIRECT_URI,
  responseType: process.env.AUTH_RESPONSE_TYPE,
  scope: process.env.AUTH_SCOPE
}

const BASE_NAME = process.env.BASE_NAME || '/'
const ENV = process.env.NODE_ENV || 'development'
const HOST = process.env.HOST || 'http://localhost:3000/'
const IMAGES_PATH = process.env.IMAGES_PATH || 'images/'

export {
  AUTH_CONFIG,
  BASE_NAME,
  ENV,
  HOST,
  IMAGES_PATH
}
