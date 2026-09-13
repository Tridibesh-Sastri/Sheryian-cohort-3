

const userController = (req,res)=>{
    console.log("hello")
    console.log(req.body)
    console.log(req.file)

    res.send("user creation data recieved")
}

module.exports = userController