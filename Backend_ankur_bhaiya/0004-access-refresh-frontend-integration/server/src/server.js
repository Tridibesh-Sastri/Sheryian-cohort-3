import config from "./configs/config.js";

import app from "./app/app.js";
import connectDB from "./configs/db.config.js";

await connectDB()

const port = config.PORT
app.listen(port, ()=>{
    console.log('server is running on port: ',port)
})