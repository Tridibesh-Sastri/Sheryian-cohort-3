const express = require('express')
const upload = require('../config/multer')

const router = express.Router()



// router.post('/',()=>{console.log("main middleware")}, (req, res)=>{

// router.post(
//     '/',
//     (req, res, next)=>{
//         console.log("main middleware");
//         next()
//     }, 
//     (req, res)=>{

// router.post('/',  (req,res)=>{

router.post('/', upload.single("image"), (req, res)=>{
    try {
        let body = req.body
        console.log(body)
        console.log(req.file)
        return res.status(200).json({
            status: true,   
            message: "file reacive Successfully"
        })
    } catch (error) {
        // console.log("Internal server Error", error)
        return res.status(500).json({
            status: false,
            message: "Internal server error"
        })
    }
})



module.exports = router