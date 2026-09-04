const NotesModel = require('../models/notes.models')

const createNoteController = async (req, res) => {
    try{
        const data = req.body

        let newNote  = await NotesModel.create(data)
        console.log('new note created successfully')
        return res.status(201).json({
            message: "Note Created Successfully",
            data : newNote
        })


        // res.send("New note created")
    }catch(err){
        console.log(`error in creation ${err}`)
    }
}

const getAllNoteController = async (req, res)=>{
    try {
        let notes = await NotesModel.find()
        console.log(`fetched getAll notes `)
        res.send({
            success: true,
            message: "Notes fetched successfully",
            data: notes
        })
        
    } catch (error) {
        console.log(`Error in fetching getAll notes ${error}`)
    }
    


}

const getNoteByIdController = async (req, res)=>{
    try{
        let noteId = req.params.id
        let note = await NotesModel.findById(noteId)
        console.log("note fetched successfully")

        res.send(
            {
                success: true,
                message: `Singe Note with id ${noteId} fetched`,
                data: note
            }
        )
    }catch(err){
        console.log(`Error in fetching single note controller ${err}`)
    }
}


const updateNoteByIdcontroller = async(req, res) =>{
    try {
        let noteId = req.params.id
        let noteFromClient = req.body

        let updatedNote = await NotesModel.findByIdAndUpdate(noteId,noteFromClient,{
            // new : true // old deprecated
            returnDocument: 'after'
        } )

        console.log("updation successfull")

        return res.status(201).json({
            message:"Note updated",
            data: updatedNote
        })
        
    } catch (error) {
        return res.status(500).json({
            messege: "Internal Server Error"
        })
    }
}

const deleteNoteController = async (req,res) =>{
    try{
        let noteId = req.params.id
        await NotesModel.findByIdAndDelete(noteId)
        return res.status(201).json({
            success:true,
            message: "Note Deleted Successfully"
        })
    }catch(err){
       return res.status(500).json({
            messege: "Internal Server Error"
        })
    }
}

module.exports = {
    createNoteController, 
    getAllNoteController, 
    getNoteByIdController,
    updateNoteByIdcontroller,
    deleteNoteController
}