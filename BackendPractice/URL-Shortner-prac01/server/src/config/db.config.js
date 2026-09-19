import mongoose from 'mongoose'
import config from './config.js'

const connectDb = ()=>{
    try {
        mongoose.connect(config.MONGO_URI)
        console.log('Database connected successfully ✅')
    } catch (error) {
        console.log('Database connection error: ', error)
    }
}

export default connectDb