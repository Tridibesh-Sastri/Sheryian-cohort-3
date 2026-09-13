import app from './src/app.js'
import connectDB from './src/configs/db.config.js'

// intiate cors

await connectDB()

const port = 3000

app.listen(port, ()=>{
    console.log("server is running on port: ", port)
})