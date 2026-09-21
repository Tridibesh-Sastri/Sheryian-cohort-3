import db from 'mongoose'
import config from './config.js'

const connectDb = async ()=>{
    try {
        await db.connect(config.MONGO_URI)
        console.log('Database Connected Succesfully')
    } catch (error) {
        console.error("Failed to connect to Databse", error)
    }
}

export default connectDb