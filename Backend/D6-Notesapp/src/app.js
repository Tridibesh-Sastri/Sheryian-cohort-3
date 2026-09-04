const express = require('express');
const NotesModel = require('./models/notes.models')
const connectDb = require('./config/db')
const createNoteController = require('./controllers/notesController')
const notesRoute = require('./routes/notes.route')

const app = express();
// Middleware to parse JSON requests
app.use(express.json());

connectDb()

app.use('/notes',notesRoute)

app.get('/', (req, res) => {
    res.send("Hello World");
})

// app.get('/getAll', )




module.exports = app;