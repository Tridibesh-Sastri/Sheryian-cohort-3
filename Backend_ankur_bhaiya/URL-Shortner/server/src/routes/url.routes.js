import express from 'express'
import generateCode from '../utils/generateCode.js'
import urlModel from '../models/url.model.js'

const router = express.Router()

router.post('/', async (req, res)=>{
    const url = req.body.url

    if(!url) {
        return res.status(400).json({error:"URL is required"})
    }

    if(url.startsWith('http://') === false && url.startsWith('https://') === false){
        return res.status(400).json({error: "Enter a valid URL"})
    }
    
    if(url.length> 2048){
        return res.status(400).json({error: "Url is too long"})
    }
    const code = generateCode()
    const newUrl = await urlModel.create({
        originalUrl: url,
        shortCode: code,
    })

    return res.status(201).json({
        message: "URL shortened successfully",
        data: {
            originalUrl: newUrl.originalUrl,
            shortCode: newUrl.shortCode
        }
    })
})

router.get('/', async function (req, res) {
    const urls = await urlModel.find()

    return res.status(201).json({
        message: "Urls fetched successfully",
        data: {
            urls
        }
    })
})


export default router