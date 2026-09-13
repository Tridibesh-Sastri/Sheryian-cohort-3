// To build A route 
// step 1 import express
import express from 'express'


// step 2 Create route instance using Router method of express
const router = express.Router()

// step 3 build apis using get, post, put, delete, etc. method of the created instance of Router




// test router
router.get('/test', (req, res)=>{
    console.log("Timer Router connected succesfully")
    res.send('timer router connected succesfully')
})

export default router