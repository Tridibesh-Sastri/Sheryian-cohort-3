const express = require('express')
const router = express.Router()
const {
    createNoteController , 
    getAllNoteController, 
    getNoteByIdController,
    updateNoteByIdcontroller,
    deleteNoteController,} = require('../controllers/notesController')
const NotesModel = require('../models/notes.models')

//create
router.post('/create',createNoteController)
// read all
router.get('/getAll', getAllNoteController)
// read by ID
router.get('/:id', getNoteByIdController)
// update
router.put('/:id', updateNoteByIdcontroller )
//delete
router.delete('/:id', deleteNoteController)

module.exports = router     