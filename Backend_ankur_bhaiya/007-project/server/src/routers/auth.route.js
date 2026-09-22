import { Router } from "express";
import {registerController, loginController, refreshController, getMeController} from '../controllers/auth.controller.js'
import{ registerValidator, loginValidator} from '../validators/auth.validator.js'
import accessChecker from '../middleware/accessChecker.js'

const router = Router()

router.post('/register',registerValidator, registerController)

/**
 * @POST /api/auth/login
 * @param req
 * @param req.body = {email, password}
 * res.status(200)
 */

router.post('/login',loginValidator, loginController)


/**
 * Refresh api
 */

router.post('/refresh',refreshController)


/**
 * Get me api
 */

router.get('/me',accessChecker,getMeController)


export default router
