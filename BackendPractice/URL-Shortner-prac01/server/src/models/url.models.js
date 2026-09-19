import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    originalUrl : {
        type : String,
        required : true,
    },
    shortCode : {
        type: String,
        required : true,
        unique: true
    },
    click: {
        type: Number,
        default: 0,
    }
},{
    timestamps: true
})

const urlMOdel = mongoose.model('url',urlSchema)

export default urlMOdel