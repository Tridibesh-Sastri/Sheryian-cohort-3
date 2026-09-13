// const express = require('express') // this is the syntax for type commonjs
console.log("app 1st line is running....")

import express from "express"

import postRouter from './routes/post.route.js'



const app = express()
app.use(express.json())


// post router
app.use('/post',postRouter)


// test root with get method

app.get('/',(req,res)=>{
    res.send("Hey welcome my Dimension")
})


// export it 
// module.exports = app // this is the syntax for type commonjs

export default app

console.log("app last line is running....")