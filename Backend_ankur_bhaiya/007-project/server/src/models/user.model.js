import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
        type : String,
        reauired : true,
    },
    email : {
        type : String,
        required : true,
        isUnique : true
    },
    passwordHash : {
        type : String,
        required : true,
    },
    role : {
        type:String,
        default:"user",
        enum:["user", "seller"]
    },
    refreshTokenHash:{
        type: String
    }
})

export const userModel = mongoose.model('user',userSchema)
