import express from 'express'
import { getMeController, registerController, refreshController } from '../controllers/user.controllers.js'

const router = express.Router()

router.post('/register',registerController)

router.get('/me',getMeController)

router.post('/refresh', refreshController)

export default router