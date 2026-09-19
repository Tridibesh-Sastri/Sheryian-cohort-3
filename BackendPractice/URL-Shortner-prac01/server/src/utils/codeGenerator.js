const main = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1123457890'
// make a set to store all codes inside the db 
let code = ''
const generateCode = (n)=>{
    for(let i = 0; i< n ; i++){
        code += main[Math.floor(Math.random()*main.length)]
    }
    
    return code
}

export default generateCode