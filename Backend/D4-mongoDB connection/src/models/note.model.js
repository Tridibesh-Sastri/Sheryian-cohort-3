const mongoose = require('mongoose');

let noteSchema = new mongoose.Schema({
    // title : {
    //     type: String,
    //     required: true
    // }, // for more then 1 validattion we can pass object of validation to the field key

    // description : {
        //     type : String,
        //     minlength : 10,
        //     maxlength : 100,
        //     required : true
        // }

        title : String,
        description : String
    })

const NotesModel = mongoose.model('Notes', noteSchema); // mongoose.model('collectionName', schemaName) -> collectionName is the name of the collection in the database and schemaName is the name of the schema we created

module.exports = NotesModel;