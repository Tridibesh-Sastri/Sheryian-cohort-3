console.log("post.router 1st line is running....")

import express from 'express'
import {postController, getAllPostcontroller} from '../controllers/post.controller.js'
import { upload } from '../configs/multer.config.js'
import { get } from 'mongoose'

const router  = express.Router()

router.post('/create', upload.single('image') , postController)

router.get('/getPost', getAllPostcontroller)

export default router

console.log("post.router 1st line is running....")