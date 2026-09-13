console.log("multer.config 1st line is running....")

import multer from 'multer'

const cloudeStorage = multer.memoryStorage()

export const upload = multer({storage:cloudeStorage})

console.log("multer.config 1st line is running....")