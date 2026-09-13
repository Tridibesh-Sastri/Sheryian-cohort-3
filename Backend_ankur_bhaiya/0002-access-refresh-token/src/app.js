import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import timerRouter from './routes/timer.route.js'

dotenv.config()

const app = express()
app.use(express.json())

app.use('/api/auth',userRouter)
app.use('/api/timer',timerRouter)




app.get('/',(req,res)=>{
    res.send("Hey welcome to practice")
})


export default app