import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected Succesfully")
    } catch (error) {
        console.log("Error in connecting with the DB: ",error)
    }
}

export default connectDB