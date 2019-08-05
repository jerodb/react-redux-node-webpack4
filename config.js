// **********************
// CONFIG INITIALIZATION
// **********************
require('dotenv').config()

const BASE_NAME = process.env.BASE_NAME || '/'
const NODE_ENV = process.env.NODE_ENV || 'development'
const HOST = process.env.HOST || 'http://localhost:3000/'
const IMAGES_PATH = process.env.IMAGES_PATH || 'images/'

export {
  BASE_NAME,
  NODE_ENV,
  HOST,
  IMAGES_PATH
}
