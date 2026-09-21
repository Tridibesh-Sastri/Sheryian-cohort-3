import {body, validationResult} from 'express-validator'

const registerValidator = [
    body('email')
        .exists().withMessage("Email is required").bail()
        .trim()
        .isEmail().withMessage("Enter a valid email"),

    body('name')
        .exists().withMessage("Name is required").bail()
        .trim()
        .isString().withMessage('Name must be a String').bail()
        .isLength({min:2, max:30}).withMessage("Name length must be between 2 and 30"),

    body('password')
        .exists().withMessage("Password is required").bail()
        .isString().withMessage("Password must be a string").bail()
        .trim()
        .isLength({min:8}).withMessage("Password must be atleast 8 charechter long"),

    (req, res, next)=>{
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                message: "Invalid request",
                errors: errors.array()
            })
        }

        next()
    }
    
]


export default registerValidator