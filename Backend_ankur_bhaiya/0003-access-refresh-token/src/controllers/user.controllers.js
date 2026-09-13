import {userModel} from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import { generateToken , verifyAccessToken, verifyRefreshToken} from "../utils/auth.js";
import { decode } from "jsonwebtoken";
// import { use } from "react";


export const registerController = async (req, res)=>{
    console.log("user Creation started.....................")

    const {email, name, password} = req.body
    
    const isUserExist = await userModel.findOne({ email })
    console.log("findOne is good")

    if(isUserExist){
        return res.status(400).json({
            message:"User already exist",
            errors:[
                {
                    path: "email", // also used field : "email", 
                    message:"User already exist"
                }
            ]
        })
    }

    const user = await userModel.create({
        name,
        email,
        passwordHash: await bcrypt.hash(password,12)
    })

    const {accessToken, refreshToken} = generateToken({userId:user._id})

    console.log(accessToken,"and",refreshToken)

    user.refresh_token = refreshToken
       
    await user.save()



    res.cookie("refreshToken",refreshToken, {
        httpOnly:true, // this makes sure that client side js can't access the cookie but server side js can access the cookie
    })

    res.status(201).json({
        status:true,
        message: "User registered successfully",
        data: {
            user:{
                name: user.name,
                email: user.email,
                // refresh:user.refresh_token
            }
        }
    })
    console.log( "user Created.....................")
}

export const getMeController = async (req, res)=>{
    const accessToken = req.headers.authorization?.split(" ")[1]
    console.log("getMeController called")
    // console.log(accessToken)

    try {
        console.log('try started')
        const decoded = verifyAccessToken(accessToken)

        // console.log(decoded)
        const user = await userModel.findById(decoded.id)

        return res.status(201).json({
            status:true,
            message:"user found successfully",
            data: {
                user:{
                    name:user.name,
                    email:user.email
                }
            }
        })

    } catch (error) {
        return res.status(401).json({
            message: "invalied access token"
        })
    }
}

export const refreshController = async (req, res)=>{
    console.log("Token Refreshing started.....................")
    

    const refreshToken = req.cookies.refreshToken

    if(!refreshToken){
        return res.status(401).json({
            message: "Unothorized, refresh token not found"
        })
    }
    console.log('refresh contoller working and token is good')
    try {
        console.log("try started")
        const decoded = await verifyRefreshToken(refreshToken)
        console.log(decoded)
        const user = await userModel.findById(decoded.id)
        console.log(user)
        if(refreshToken !== user.refresh_token){
            user.refresh_token = null
            user.save()

            return  res.status(401).json({
                message: "Unothorized, refresh token mismatch"
            })
        }

        console.log("user inside refresh Controller: ", user)

        // generate new token pair
        console.log('calling generateToken in next line....... with id', user._id)
        const {accessToken, refreshToken: newRefreshToken} = generateToken({userId:user._id})
        //saving the new refresh token isinde user db
        user.refresh_token = newRefreshToken
        user.save()
        // sending the new refresh token in clinent cookies
        res.cookie("refreshToken",newRefreshToken,{ httpOnly: true})

        res.status(200).json({
            message:"Token refreshed successfully",
            accessToken,
            refreshToken,
            newRefreshToken
        })

    } catch (error) {
        return res.status(401).json({
            message:"Internal server error in new access token genartion"
        })
    }
    console.log("Token Refreshing completed.....................")
}