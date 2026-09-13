const multer = require('multer')


// for local storage
const localStorage = multer.diskStorage({
    destination : (req, file, cb)=>{
        // cb(error, destination)
        cb(null, "uploads/")
    }, // where you go and as multer follow FTP protocol so it take req, file and cb as argument (cb = call back)
    filename : (req, file, cb)=> {  // in which name kis namm se rahegi

        console.log("in filename-> ", file)
        
        cb(null, Date.now() + "-"+file.originalname)
    }, 
})// for storing locally 

const cloudStorage = multer.memoryStorage()
// const upload = multer({storage : storage})
const upload = multer({storage:localStorage}) // we can also write this like that coz when kwy and value are same name then we can write one

module.exports = upload