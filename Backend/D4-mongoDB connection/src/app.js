// console.log("MongoDB connection successful");

const express = require('express');
// const mongoose = require('mongoose');
const connectDb = require('./config/db');
// const port = 3000;
const NotesModel = require('./models/note.model');

const app = express();
app.use(express.json());


connectDb();

app.get('/', (req, res) =>{
    res.send("Hello World");
})

app.post('/create', async (req, res) =>{
    let data = req.body;

    const newNote = await NotesModel.create({
        title: data.title,
        description: data.description,
    });

    // console.log(data);  

    res.send({
        success: true,
        message: "Note created successfully",
        data: newNote
    });
})


app.get('/getAll', async (req, res) =>{
    const notes = await NotesModel.find();
    res.send({
        success: true,
        message: "Notes fetched successfully",
        data: notes
    });
})

module.exports = app;

// module.exports = port;