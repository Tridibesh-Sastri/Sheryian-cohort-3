console.log("storage.service 1st line is running....")
import  ImageKit,{ toFile } from "@imagekit/nodejs";
import dotenv from 'dotenv'
dotenv.config()

const storageInstance =  new ImageKit({
    urlEndpoint: process.env.IK_URL,
    publicKey: process.env.IK_PUBLIC_KEY,
    privateKey:process.env.IK_PRIVATE_KEY
})

export const sendFiles = async(fileBuffer,fileName)=>{
    const imageFile = await toFile(fileBuffer, fileName)
    const obj = {
        file: imageFile,
        fileName,
        folder:'mini-insta'
    }


    return await storageInstance.files.upload(obj)
}
    console.log("storage.service last line is running....")