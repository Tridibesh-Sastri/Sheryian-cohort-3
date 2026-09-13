import mongoose from "mongoose";
import config from './config.js'

const connectDB = async ()=>{
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log("Database Connected Succesfully")
    } catch (error) {
        console.log("Error in connecting with the DB: ",error)
    }
}

export default connectDB