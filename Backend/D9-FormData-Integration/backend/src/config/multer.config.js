const multer = require('multer')

const diskStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        console.log("destination is okay from multer ")
        cb(null, 'uploads/')
    },
    filename:(req, file, cb)=>{
        console.log("fileName ok from multer")
        cb(null, Date.now() + file.originalname)
    }
})

// const cloudStorage = multer.memoryStorage()

const uploads = multer({storage: diskStorage})

module.exports = uploads