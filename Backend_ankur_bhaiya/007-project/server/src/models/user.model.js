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
    }
},{
    role : {enum:["user", "seller"]}
})

export const userModel = mongoose.model('user',userSchema)
