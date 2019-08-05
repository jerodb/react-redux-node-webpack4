// **********************
// CONFIG INITIALIZATION
// **********************
require('dotenv').config()

const BASE_NAME = process.env.BASE_NAME || '/'
const HOST = process.env.HOST || 'http://localhost:3000/'
const IMAGES_PATH = process.env.IMAGES_PATH || 'images/'
const NODE_ENV = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 3000

export {
  BASE_NAME,
  HOST,
  IMAGES_PATH,
  NODE_ENV,
  PORT,
}
