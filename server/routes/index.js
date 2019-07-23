import express from 'express'
import root from './root'
import api from './api'

const router = express.Router()

router.use('/api', api)
router.get('*', root)

module.exports = router
