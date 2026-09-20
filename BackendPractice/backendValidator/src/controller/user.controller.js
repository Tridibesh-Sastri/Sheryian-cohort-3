import userMOdel from '../models/user.model.js'

export const userRegister = async (req, res)=>{
    let errors = []
    const emaiRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const {name, email, password} = req.body

    if(!name || !(name.trim())){
        errors.push({
            name:'Name is empty'
        })
    }
    if(!email || !(email.trim())){
        errors.push({
            email:'Email is empty'
        })
    }
    if(!emaiRegex.test(email)){
        errors.push({
            email:'Invalied Email'
        })
    }

    if(!password || !(password.trim())){
        errors.push({
            name:'Password is empty'
        })
    }
    if(errors.length > 0){
        return res.status(400).json({
            errors:errors,
        })
    }

    const newUser = await userMOdel.create({
        email,
        name,
        password
    })

    res.status(200).json({
        message : "User creation is done man 👏",
        data:{
            newUser
        }
    })
}