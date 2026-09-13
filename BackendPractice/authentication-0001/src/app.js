import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'

dotenv.config()

const app = express()
app.use(express.json())

app.use('/api/auth',userRouter)




app.get('/',(req,res)=>{
    res.send("Hey welcome to practice")
})


export default app