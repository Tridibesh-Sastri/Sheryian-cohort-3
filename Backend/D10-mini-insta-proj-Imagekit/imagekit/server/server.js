// const app = require('./src/app') // this is the syntax for type commonjs

// import dotenv from 'dotenv'
// dotenv.config()
console.log("server is running....")

import connectDB from './src/configs/db.config.js'
import app from './src/app.js'  // this is the syntax for type module

// connecting to Database
connectDB()

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})

console.log("server last line is running....")