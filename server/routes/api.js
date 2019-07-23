import express from 'express'
import { users } from './controllers'

const router = express.Router()

router.post('/users/set', users.setUser)

module.exports = router
