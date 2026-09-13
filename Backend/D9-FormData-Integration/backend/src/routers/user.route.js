const express = require('express')
const userController = require('../controllers/user.controller')
const multer = require('multer')
const uploads = require('../config/multer.config')

const router = express.Router()

router.post('/create',uploads.array('profile_pic'), userController)

module.exports = router