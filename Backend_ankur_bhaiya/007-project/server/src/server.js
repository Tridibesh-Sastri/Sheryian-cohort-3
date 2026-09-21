import config from './config/config.js'
import app from './app/app.js'
import connectDb from './config/db.js'

connectDb()

const port = config.PORT

app.listen(port, ()=>{
    'server is running on port: ', port
})