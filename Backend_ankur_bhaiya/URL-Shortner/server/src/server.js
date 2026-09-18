import config from "./config/config.js";
import app from "./app/app.js";
import connectDb from "./config/db.js";

const port = config.PORT

connectDb()



console.log(port)
app.listen(port,()=>{
    console.log('server is running')
})

console.log('app.listen is asynchronus function')