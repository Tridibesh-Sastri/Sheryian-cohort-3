import express from 'express'
import authRouter from '../routers/auth.route.js'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cookieParser()) // CookieParser is a middleware which allow server to set cookies in client browser

app.use('/api/auth', authRouter)

export default app