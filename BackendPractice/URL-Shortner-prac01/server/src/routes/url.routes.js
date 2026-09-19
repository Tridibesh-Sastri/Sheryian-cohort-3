import express from 'express'
import {creatURL, getAllUrl} from '../controllers/url.controllers.js'

const router = express.Router()

router.post('/', creatURL)

// console.log('router is routing....')
router.get('/',getAllUrl)

export default router