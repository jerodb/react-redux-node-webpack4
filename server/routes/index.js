import express from 'express'
import fs from 'fs'
import path from 'path'
import api from './api'
import root from './root'

const router = express.Router()

router.use('/api', api)

router.get('/auth/callback', (req, res) => {
  const template = path.join(__dirname, '..', '..', 'dist', 'index.html')

  // Loads template
  fs.readFile(template, 'utf8', (err, document) => {
    if (err) throw err

    return res.send(document)
  })
})

router.get('*', root)

module.exports = router
