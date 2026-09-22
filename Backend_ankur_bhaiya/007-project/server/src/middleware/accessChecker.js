import { verifyAccessToken } from "../utils/auth.utils.js"

const accessChecker = async (req , res , next)=>{
    const accessToken = req.headers.authorization?.split(" ")[1]
  

    const decode = verifyAccessToken(accessToken)

    if(!decode){
        return res.status(403).json({
            msg: "Token is not valied"
        })
    }

    // const {userId, role} = decode
    req.user = decode
    
    next()
}

export default accessChecker