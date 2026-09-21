import config from '../config/config.js'
import {userModel} from '../models/user.model.js'
import bcrypt from 'bcrypt'
import { createAccessToken, createRefreshToken } from '../utils/auth.utils.js'

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
                    field : email,
                    message: "user already exist with this email address"
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

        const accessToken = createAccessToken({
            userId: newUser._id,
            role : newUser.role
        })
        const refreshToken = createRefreshToken({
            userId: newUser._id,
            role : newUser.role
        })

        res.status(200).json({
            message : "User Created Succesfully",
            data: {
                name : newUser.name,
                email : newUser.email
            }
        })
    } catch (error) {
        res.status(400).json({
            error : "Failed to create user due to internal server error",error
        })
    }

}

/**
 * Login Controller
 */