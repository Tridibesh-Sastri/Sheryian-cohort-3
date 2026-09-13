import jwt from 'jsonwebtoken'
import { userMOdel } from '../models/user.model.js'


export const authentication = async (req, res, next)=>{
    
    try {
        const token = req.headers.authorization
        if (!token) {
            return res.status(401).json({
                message:"Token not found"
            })
        }

        // const data = jwt.decode(token)


        // verify the token with jwt_secret
        const data = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userMOdel.findById(data.id)

        // we create new property in req and set the user data in this new property
        req.user = user


        return next()

    } catch (error) {
        return res.status(404).json({
            status: false,
            message: "404 Token invalied"
        })
    }

        // const token = req.headers.authorization
        // if (!token) {
        //     return res.status(401).json({
        //         message:"Token not found"
        //     })
        // }
        // const data = jwt.decode(token)

        // const user = await userMOdel.findById(data.id)

        // // we create new property in req and set the user data in this new property
        // req.user = user


        // return next()
        

    


}