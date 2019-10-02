// **********************
// CONFIG INITIALIZATION
// **********************
import path from 'path'

require('dotenv').config()

const {
  BASE_PATH, GAMES_HOST, HOST, MYSQL_DB, MYSQL_HOST, MYSQL_PASS,
  MYSQL_PORT, MYSQL_USER, NODE_ENV, PORT, RECAPTCHA_KEY
} = process.env

const ROOT_DIR = path.join(__dirname, 'dist')

export {
  BASE_PATH,
  GAMES_HOST,
  HOST,
  MYSQL_DB,
  MYSQL_USER,
  MYSQL_PASS,
  MYSQL_HOST,
  MYSQL_PORT,
  NODE_ENV,
  PORT,
  RECAPTCHA_KEY,
  ROOT_DIR
}
