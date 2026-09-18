import mongoose  from "mongoose";

const urlScheema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortCode: {
        type: String,
        required: true,
    },
    click: {
        type: Number,
        default: 0
    },
    
},{
    timestamps: true
})

const urlModel = mongoose.model('url',urlScheema)

export default urlModel