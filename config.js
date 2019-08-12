// **********************
// CONFIG INITIALIZATION
// **********************
import path from 'path'

require('dotenv').config()

const BASE_NAME = process.env.BASE_NAME || '/'
const HOST = process.env.HOST || 'http://localhost:3000/'
const NODE_ENV = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 3000

const ROOT_DIR = path.join(__dirname, 'dist')

export {
  BASE_NAME,
  HOST,
  NODE_ENV,
  PORT,
  ROOT_DIR,
}
