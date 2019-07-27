import express from 'express'
import callback from './callback'

const router = express.Router()

router.get('/callback', callback)

export default router
