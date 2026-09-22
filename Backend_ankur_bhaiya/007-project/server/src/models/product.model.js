import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 30
    },
    description:{
        type: String,
        required: true,
        minLength: 20,
        maxLength: 500
    },
    images: {
        type:[{
            type:String
        }] ,
        validate: {
            validator: images =>images.length <= 5,
            message: "A product can have at most 5 images"
        },
        price:{
            amount:{
                type:Number,
                reauired: true
            },
            currency:{
                type: String,
                enum: ["INR","USD"],
                default: "INR"
            },
            sizes:[
                {
                    size:{
                        type: String,
                        enum: []
                    },
                    stock: {
                        
                    }
                }
            ]
        }

    }
})