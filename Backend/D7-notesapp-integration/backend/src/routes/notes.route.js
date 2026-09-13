const express = require('express')
const router = express.Router()
const {
    createNoteController , 
    getAllNoteController, 
    getNoteByIdController,
    updateNoteByIdcontroller,
    deleteNoteController,
    patchNoteByIdController,} = require('../controllers/notesController')
const NotesModel = require('../models/notes.models')

//create
router.post('/create',createNoteController)
// read all
router.get('/getAll', getAllNoteController)
// read by ID
router.get('/:id', getNoteByIdController)
// update
router.put('/:id', updateNoteByIdcontroller )
// patch
router.patch('/:id/single', patchNoteByIdController)
//delete
router.delete('/:id', deleteNoteController)

module.exports = router     