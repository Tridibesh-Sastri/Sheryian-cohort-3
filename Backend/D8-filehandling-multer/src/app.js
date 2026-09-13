
const express = require('express')
const fileRoute = require('./routes/file.routes')

const app = express()
app.use(express.json()) // this is for establish proper communication between db and express 
app.use('/file',fileRoute)

app.get('/',(req, res) =>{
    res.send("Hellow Dosto")
})

module.exports = app