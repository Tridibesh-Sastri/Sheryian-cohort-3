import config from './config/config.js'
import app from './app/app.js'
import connectDb from './config/db.config.js'

connectDb()

const port = config.PORT
app.listen(port , ()=>{
    console.log('server is running on port: ',port)
})


