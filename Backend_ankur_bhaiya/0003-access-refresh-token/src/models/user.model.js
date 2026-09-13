import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:[3,"Name must be at least 3 charechter long"],
        msxLength: [50,"Name must be at most 50 charechter long"],
    },
    email:{
        type:String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    passwordHash:{
        type:String,
        required:true,
    },
    refresh_token:{
        type:String,
        // required:true,
    }
})

export const userModel = mongoose.model('users',userSchema)
// export default userModel