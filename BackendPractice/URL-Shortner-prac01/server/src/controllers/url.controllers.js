// import mongoose from "mongoose";
import urlModel from '../models/url.models.js'
import generateCode from '../utils/codeGenerator.js'

export const creatURL =  async (req, res)=>{
    const code = generateCode(6)
    const url = req.body.url

    if(!url){
        return res.status(400).json({
            error : "Please enter a URL"
        })
    }
    if((!url.startsWith('http://')) && (!url.startsWith('https://'))){
        return res.status(400).json({
            error : "Please enter a valid URL starting with http:// or https://"
        })
    }
    if( url.length > 2048){
        return res.status(400).json({
            error : "URL is too long"
        })
    }

    const newUrl = await urlModel.create({
        originalUrl : url,
        shortCode: code
    })

    

    res.status(200).json({
        message : 'postURL working good',
        data:{
            originalUrl: newUrl.originalUrl,
            shortCode : newUrl.shortCode
        }
    })
}

export const getAllUrl = async (req, res)=>{
    const urls = await urlModel.find()
    res.status(201).json({
        message: "Urls fetched successfully ✅",
        data: urls
    })
}