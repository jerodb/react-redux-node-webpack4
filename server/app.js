import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import path from 'path'
import { verifyConnection } from './services/mysql'
import routes from './routes'
import { MYSQL_DB } from '../config'

// Init express app
const app = express()

// ==============================================================================
// APPLICATION MIDDLEWARE
// ==============================================================================
app.use(cors())

// Parse the cookies on the request.
app.use(cookieParser())

// Add the logging middleware.
app.use(morgan('dev'))

// support json encoded bodies.
app.use(bodyParser.json())

// support encoded bodies.
app.use(bodyParser.urlencoded({ extended: true }))

// define the folder that will be used for static content.
app.use(express.static(path.join(__dirname, '..', 'dist', 'root')))
app.use('/css', express.static(path.join(__dirname, '..', 'dist', 'css')))
app.use('/images', express.static(path.join(__dirname, '..', 'dist', 'images')))
app.use('/js', express.static(path.join(__dirname, '..', 'dist', 'js')))

// ==============================================================================
// VIEW CONFIGURATION
// ==============================================================================
// app.set('views', path.join(__dirname, '..', 'dist'))
// app.set('view engine', 'pug')

// ==============================================================================
// ROUTES
// ==============================================================================
app.use('/', routes)

// ==============================================================================
// VERIFY DATABASE CONNECTION
// ==============================================================================
if (MYSQL_DB) verifyConnection()

// ==============================================================================
// ERRORS HANDLER
// ==============================================================================
app.use((err, req, res, next) => {
  let msg = 'An error has occured'
  let info = 'If the error persists you are welcome to debug :)'
  const status = err.status || 500

  if (app.get('env') === 'production') {
    msg = `${err.message} (${status})`
    info = err.stack
  }

  console.log('err: ', err)

  res.status(status)
  res.render('error', { msg, info })
  next()
})

module.exports = app
