// import crypto from 'crypto'


const generateCode = ()=>{
    // return crypto.randomBytes(4).toString('base64url').slice(0,6)
    const main = 'abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let code = ""
    for(let i = 0; i < 6; i++){
        code += main.charAt(Math.floor(Math.random()*62))
    }
    console.log("code: ",code)
    return code
}
export default generateCode