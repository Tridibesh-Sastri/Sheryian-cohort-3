import jwt from 'jsonwebtoken'
import config from '../configs/config.js'
 

export const generateToken = ({userId})=>{

    console.log('id came for token genartion', userId)
    
    const accessToken = jwt.sign({id:userId},config.ACCESS_TOKEN_SECRET,{expiresIn:"15m"})
    const refreshToken = jwt.sign({id:userId},config.REFRESH_TOKEN_SECRET,{expiresIn:"7d"})
    return {accessToken,refreshToken}
}

export function verifyAccessToken (token){
    const decode = jwt.verify(token,config.ACCESS_TOKEN_SECRET)
    // console.log(decode)
    return decode
}

export function verifyRefreshToken (token) {
    console.log('verifyRefreshToken started')
    try {
        
        const decode = jwt.verify(token,config.REFRESH_TOKEN_SECRET)
        console.log(decode)
        return decode
    } catch (error) {
        console.log('jwt verification error: ', error)
    }

    
}