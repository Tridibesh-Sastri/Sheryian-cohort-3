const express = require('express')
const userRouter = require('./routers/user.route')
const cors = require('cors')

const app = express()
app.use(express.json())

app.use(
    cors({
        origin: "http://localhost:5173"
    })
)

app.get('/', ( req, res)=>{
    res.send("kiunn pehechane mujhe ??")
})

app.use('/user', userRouter)


module.exports = app