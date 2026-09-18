import mongoose from 'mongoose'
import config from './config.js'

const connectDb = async ()=>{
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log('Database connected Successfully')
    } catch (error) {
        console.log('Error connecting to Database: ', error)
    }
}

export default connectDb
