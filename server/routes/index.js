import express from 'express'
import root from './root'

const router = express.Router()

router.get('/', root)

module.exports = router
