import express from 'express'
import api from './api'
import auth from './auth'
import root from './root'

const router = express.Router()

router.use('/api', api)
router.use('/auth', auth)

router.get('*', root)

export default router
