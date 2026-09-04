const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    description : {
        type:String,
        minlength: [10, "min 10 chars are required"],
        maxlength: [300,"max 300 chars are allowed"]
    }
})

const NotesModel = mongoose.model('notes', noteSchema)

module.exports = NotesModel