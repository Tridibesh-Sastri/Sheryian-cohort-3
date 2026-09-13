console.log("post.model 1st line is running....")

import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const postModel = mongoose.model("posts",postSchema)

export default postModel

console.log("posts.model last is running....")