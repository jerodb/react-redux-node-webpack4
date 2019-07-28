import express from 'express'
import user from './user'

const router = express.Router()

router.post('/user/info', user.getInfo)

export default router
