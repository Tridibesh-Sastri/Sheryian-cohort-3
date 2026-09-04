const mongoose = require('mongoose')

const connectDb = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/localDb-1")
        // await mongoose.connect("mongodb+srv://tridibeshSastri:Gopal123@cohortcluster.67miwzj.mongodb.net/")
        console.log("database connected successfully")
    }catch(err){
        console.log(`Error in connecting with Database ${err}`)
    }
}



module.exports = connectDb