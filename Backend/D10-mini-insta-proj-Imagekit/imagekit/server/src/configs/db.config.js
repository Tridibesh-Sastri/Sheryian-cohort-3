console.log("db.config 1st lin is running....")

import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        
        console.log("MongoDB is connected")
    } catch (error) {
        console.log("Can't able to connect with DB check ConnectDB error: ",error)
    }

}


export default connectDB
console.log("db.config last line is running....")