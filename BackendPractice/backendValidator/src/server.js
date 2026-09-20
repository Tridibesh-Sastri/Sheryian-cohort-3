import app from './app/app.js'
import connectDb from './config/db.js'
import config from './config/config.js'

connectDb()


app.listen(config.PORT, ()=>{
    console.log("Server is running wonderfully ...............")
})