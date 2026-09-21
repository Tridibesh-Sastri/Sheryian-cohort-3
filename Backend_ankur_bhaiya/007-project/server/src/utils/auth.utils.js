import config from "../config/config.js";
import jwt from 'jsonwebtoken'


export const  createAccessToken = async ({userId, role})=>{
    const accessToken = await jwt.sign({
        userId, rore
    }, config.ACCESS_TOKEN_SECRET,{expiresIn: "15Min"})

    return accessToken 
}

export const  createRefreshToken = async ({userId, role})=>{
    const refreshToken = await jwt.sign({
        userId, rore
    }, config.REFRESH_TOKEN_SECRET,{expiresIn: "7Days"})

    return refreshToken
}