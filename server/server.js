/* eslint-disable no-console */
import '@babel/polyfill'
import http from 'http'
// import fs from 'fs'
import CONFIG from '../config'
import app from './app'

process.env.IMAGES = CONFIG.IMAGES

const env = CONFIG.ENV
const port = normalizePort(CONFIG.PORT)
const server = new http.Server(app)
/*
const certificate = fs.readFileSync('chained.pem')
const privateKey = fs.readFileSync('domain.key')

const opt = {
  cert: certificate,
  key: privateKey,
}

const server = https.createServer(opt, app)
*/
server.on('error', onError)
server.on('listening', onListening)
server.listen(port)

/**
 * Event listener for HTTP routes "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`)
      break
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`)
      break
    default:
      console.error(`${bind} failed`)
      break
  }

  throw error
}

/**
 * Event listener for HTTP routes "listening" event.
 */
function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
  console.info(`Server running on ${bind} [${env}]`)
}

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const portParsed = parseInt(val, 10)

  if (Number.isNaN(portParsed)) {
    // named pipe
    return val
  }

  if (portParsed >= 0) {
    // port number
    return portParsed
  }

  return false
}
