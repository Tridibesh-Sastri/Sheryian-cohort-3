import config from "../config/config.js";
import jwt from 'jsonwebtoken'

/**
 * Create Aceess Token
 */
export const  createAccessToken = async ({userId, role})=>{
    const accessToken = await jwt.sign({
        userId, role
    }, config.ACCESS_TOKEN_SECRET,{expiresIn: "15Min"})

    return accessToken 
}

/**
 * Create Refresh Token
 */

export const  createRefreshToken = async ({userId, role})=>{
    const refreshToken = await jwt.sign({
        userId, role
    }, config.REFRESH_TOKEN_SECRET,{expiresIn: "7Days"})

    return refreshToken
}

/**
 * Decode Refresh Token
 */

export const verifyRefreshToken = (refreshToken)=>{
    try {
        const decode = jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET)
        return decode
    } catch (error) {
        return {
            status:false,
            error
        }
    }
}

/**
 * Decode Access Token 
 */

export const verifyAccessToken = (accessToken)=>{
    try {
        const decode = jwt.verify(accessToken, config.ACCESS_TOKEN_SECRET)
        return decode
    } catch (error) {
        return {
            status:false,
            error
        }
    }
}