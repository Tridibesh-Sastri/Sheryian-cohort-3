console.log("post.controller 1st line is running....")

import postModel from "../models/posts.model.js";
import { sendFiles } from "../services/storage.service.js";

export const postController = async (req, res) => {
  try {
    //take the data from request body and file and store it in a variable
    let body = req.body;
    let file = req.file

    // now check that are the both are not null
    if(!body || !file){
        return res.status(400).json({
            success:false,
            message:"Fields are Required"
        })
    }

    // now upload the file to imagekit and get the url into a variable to send to to db
    const uploadImage = await sendFiles(file.buffer,file.originalname)
    
    console.log(uploadImage)

    // now upload the caption from req.body and image url to the mongoDb
    const post = await postModel.create({
        caption:body.caption,
        image: uploadImage.url
    })


    // console.log("controller check ok");
    // console.log("Request body: ", body);
    // console.log("Request file: ", file);
    
    // create a post in mongodb with the recieved data

    return res.status(200).json({
      status: true,
      message: "post created succesfully",
      data: post,
    });


  } catch (error) {
      console.log(error)
    return res.status(500).json({
      status: false,
      message: "internal server error returning from post controller: ",error,
    });
  }
};

export const getAllPostcontroller = async (req, res) => {
    const posts = await postModel.find()

    return res.status(200).json({
        status: true,
        message:"post recieved succesfully",
        data: posts
    })
}

// export default postController;

console.log("post.controller last line is running....")