const mongoose = require('mongoose');

const connectDb = async () => {
    try{
        await mongoose.connect("mongodb+srv://tridibeshSastri:Gopal123@cohortcluster.67miwzj.mongodb.net/")
        console.log("MongoDB connection successful");
    }catch(err){
        console.log("Error connecting to MongoDB:", err);
    }
}

module.exports = connectDb;