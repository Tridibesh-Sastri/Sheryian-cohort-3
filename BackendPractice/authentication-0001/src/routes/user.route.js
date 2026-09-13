import express from 'express'
import { 
    userCreateController, 
    userGetController, 
    userNameGetController,
    userLoginController } from '../controllers/user.controller.js'
import { authentication } from '../middlewares/auth.middleware.js'

const router = express.Router()

router.post('/register', userCreateController)

router.get('/me', userGetController)

router.get('/name', authentication, userNameGetController )

router.post('/login', userLoginController)


// Router connetion test

router.get('/test', (req,res)=>{
    console.log('router connection ok')
    res.send("router connection ok")
})

export default router   