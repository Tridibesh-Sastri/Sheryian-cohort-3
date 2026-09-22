import config from '../config/config.js'
import {userModel} from '../models/user.model.js'
import bcrypt from 'bcrypt'
import { createAccessToken, createRefreshToken, verifyRefreshToken } from '../utils/auth.utils.js'

/**
 * Register controller
 */

export const registerController = async(req, res)=>{
    // Take out the user data from request body


    const {email, name, password} = req.body

    // User preexistance Checking

    const user = await userModel.findOne({email : email})
    if(user){
        return res.status(400).json({
            // error:"Email exists login or try with another email"
            message: "User already exist with this email address",
            errors : [
                {
                    path : email,
                    msg: "user already exist with this email address"
                }
            ]
        })
    }

    // Password Hashing

    const saltRounds = config.SALT_ROUNDS
    const passHash = await bcrypt.hash(password,saltRounds)

    // Create new user
 
    try {
        const newUser = await userModel.create({
            name,
            email,
            passwordHash : passHash
        })

        //create access token and refresh token

        const accessToken = await createAccessToken({
            userId: newUser._id,
            role : newUser.role
        })
        const refreshToken = await createRefreshToken({
            userId: newUser._id,
            role : newUser.role
        })

        // Set the refresh Token in cookie

        res.cookie("refreshToken",refreshToken,{
            httpOnly: true // make sure the client side js can't able to access the cookie storage
        })

        // Set the refresh Token in databse
        const refreshHash = await bcrypt.hash(refreshToken,config.SALT_ROUNDS)
        console.log("refreshHash...... : ", refreshHash)

        const updatedUser = await userModel.findByIdAndUpdate(newUser._id,{
            refreshTokenHash: refreshHash
        }, {returnDocument: 'after'})
        // console.log("Updated User.............",updatedUser)

        res.status(201).json({
            message : "User registered Succesfully",
            data: {
                user:{
                    email : newUser.email,
                    name: newUser.name,
                    id: newUser._id
                },
                accessToken
            }
        })


    } catch (error) {
        return res.status(400).json({
            error : "Failed to create user due to internal server error",error
        })
    }

}

/**
 * Login Controller
 */

export const loginController = async(req, res)=>{
    const {email, password} = req.body

    // First check any user exist or not with this email 

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(400).json({
            msg: "Invalid Credentials"
        })
    }
    console.log("old User..................", user)

    // password is valied for the user or not

    const isPassvalied = await bcrypt.compare(password, user.passwordHash)

    if(!isPassvalied){
        return res.status(400).json({
            msg: "invalied Credentials"
        })
    }

    // create access Token and Refresh Token

    const accessToken = await createAccessToken({
        userId: user._id,
        role: user.role
    })

    const refreshToken = await createRefreshToken({
        userId: user._id,
        role: user.role
    })


    // set the refresh token in cookie 

    res.cookie("refreshToken", refreshToken, {httpOnly: true})

    // Store the refresh token in database after make it hash
    const refreshHash = await bcrypt.hash(refreshToken,config.SALT_ROUNDS)

    const updatedUser = await userModel.findByIdAndUpdate(user._id,{
        refreshTokenHash: refreshHash
    },{returnDocument: 'after'})
    console.log("Updated User.............",updatedUser)
    // return access token in respose
    
    return res.status(200).json({
        msg: "User Loggedin Succesfully",
        data: {
            user: {
                email: user.email,
                name: user.name,
                id: user._id
            },
            accessToken
        }

    })

}

/**
 * Refresh Controller
 */

export async function refreshController (req, res){
    // extract the refresh token from cookies
    const refreshToken = req.cookies.refreshToken

    // verify and decode the refresh token using jwt and extract the userID and role
    const decode = verifyRefreshToken(refreshToken)

    if(!decode){
        return res.status(400).json({
            msg: "In valied Token"
        })
    }

    const {userId,role} = decode

    // now compare the refreshtoken with db refresh token hash
    const user = await userModel.findById(userId)
    const isMatched = await bcrypt.compare(refreshToken, user.refreshTokenHash)
    if(!isMatched){
        await userModel.findByIdAndUpdate(user._id, {
            refreshTokenHash : null
        })
        return res.status(400).json({
            msg: "In valied Token"
        })
    }
    

    console.log("old user.............: ",user)
    

    // create new access token and generate token

    const newAccess = await createAccessToken({
        userId,
        role
    })

    const newRefresh = await createRefreshToken({
        userId,
        role
    })

    // set the refresh token in client cookie making sure that client side js can't able to access the token
    res.cookie("refreshToken",newRefresh, {httpOnly: true})

    // make hash of the new refresh token and save it in the database
    const newRefreshHash = await bcrypt.hash(newRefresh,config.SALT_ROUNDS)
    const updatedUser = await userModel.findByIdAndUpdate(userId,{
        refreshTokenHash: newRefreshHash
    },{returnDocument:'after'})


    console.log('Updated User.........: ', updatedUser)

    // send the access token to the user in response
    res.status(200).json({
        msg: "Token Updated Successfully",
        data:{
            user: {
                name: updatedUser.name,
                email: updatedUser.email,
                id: updatedUser._id
            },
            accessToken: newAccess
        }
    })
} 

/**
 * Me Controller
 */

export const getMeController = async (req, res)=>{

    const {userId} = req.user
    


    try {
        const user = await userModel.findById(userId)
        res.status(200).json({
            msg:"User find Succesfully",
            data:{
                role: user.role,
                name: user.name,
                email: user.email,
                id: user._id
            }
        })
    } catch (error) {
        return res.status(400).json({
            msg: "internal Server Error",
            error
        })
    }
}