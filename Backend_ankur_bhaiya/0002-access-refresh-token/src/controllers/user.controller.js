
import { userMOdel } from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import config from "../configs/config.js";

export const userCreateController = async (req, res) => {
    // take the user Data from the request
    const {email, name, password} = req.body
    try {
        
        // now create the user in db using user model 
        const user = await userMOdel.create({
            email, name, password: await bcrypt.hash(password,10)
        })

        // now create token with user id get from DB
        const userToken = jwt.sign(
            {
                id: user._id
            },
            config.ACCESS_TOKEN_SECRET
        )

        // send response
        return res.status(201).json({
            status: true,
            message: "User registered Succesfully",
            data: {
                user:{
                    email, name,
                    id: user._id
                },userToken
            }
        })

    } catch (error) {
        console.log("internal Server Error: ",error)
        return res.status(501).json({
            status: false,
            message:"internal server error"
        })
    }

}


export const userGetController = async (req, res) => {
    const authHeader = req.headers.authorization
    console.log(authHeader)

    const data = jwt.decode(authHeader)
    console.log(data)

    const user = await userMOdel.findById(data.id)
    console.log(user)

    res.status(201).json({
        status: true,
        message: "user find Succesfully",
        data: user
    })
}


export const userNameGetController = async (req, res)=>{
    console.log(req.user)

    const userName = req.user.name
    console.log(userName)

    res.status(201).json({
        status: true,
        message: "Request Succesfully"
    })
}

export const userLoginController = async (req, res) =>{
    const {email, password} = req.body

    const user = await userMOdel.findOne({
        email
    })

    const ifTrue = await bcrypt.compare(password, user.password)
    // console.log(ifTrue)
    
    if(!ifTrue){
        // console.log("password not match")
        return res.status(400).json({
            status: false,
            message: "Wrong password"
        })
    }

    const token = jwt.sign({
        id: user._id,
    },
    process.env.JWT_SECRET)

    res.status(200).json({
        status:true,
        message:"User Logged In succesfully",
        data: {
            name:user.name,
            email
        },
        token
    })
}