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
        return res.status(500).json({
            messege: "Internal Server Error"
        })
    }
}

const getAllNoteController = async (req, res)=>{
    try {
        let notes = await NotesModel.find()
        console.log(`fetched getAll notes `)
        return res.send({
            success: true,
            message: "Notes fetched successfully",
            data: notes
        })
        
    } catch (error) {
        console.log(`Error in fetching getAll notes ${error}`)
        return res.status(500).json({
            messege: "Internal Server Error"
        })
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
        return res.status(500).json({
            messege: "Internal Server Error"
        })
    }
}

// useing put method
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

//using patch method
const patchNoteByIdController = async (req, res) => {
    try {
        let noteId = req.params.id

        let body = req.body
        let updtaedNote = await NotesModel.findByIdAndUpdate(noteId, body, {
            returnDocument:'after'
        })
        consoele.log("patched succesfully")
        return res.status(200).json({
            status:true,
            message: "patched successfully",
            data: updatedNote
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status:false,
            message: "internal server error in from patch controller"
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
    patchNoteByIdController,
    deleteNoteController
}