import express from 'express'
import userRoute from '../routers/user.route.js'


const app = express()
app.use(express.json())

app.use('/api/auth',userRoute)



export default app