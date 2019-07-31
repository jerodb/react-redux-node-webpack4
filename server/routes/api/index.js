import express from 'express'
import server from './server'

const router = express.Router()

router.get('/server/info', server.getServerInfo)

export default router
