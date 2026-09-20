import mongoose from "mongoose";
import config from "./config.js";

const connectDb = async ()=>{
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log('Database Connected & we Good To Go!!! 👍')
    } catch (error) {
        console.error('Failed to connect with Database ⚠️ ', error)
    }
}

export default connectDb