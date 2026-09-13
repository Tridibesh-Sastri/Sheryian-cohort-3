import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import NoteCard from "./noteCard";

const App = () => {


  // Get all data

  const [allNotes, setAllNotes] = useState([])

  // console.log(allNotes)

  let notesFetch = async ()=>{
    // await setAllNotes([3,2,3,4])
    // console.log(allNotes)
    
    try {
      let res = await axios.get("http://localhost:3000/notes/getAll")
      let notes = res.data.data
      console.log("This is api response",notes)
      await setAllNotes(notes)
      // setAllNotes((prev)=>([...prev,res.data.data]))

      // console.log("This is responce store in a state",allNotes)  

    } catch (error) {
      console.log("Api Note responed ",error)
    }
    
  }
  
  useEffect(() => {
    notesFetch()
  }, [])


  
  // create note

  const [formValue, setFormValue] = useState({
    title: "",
    description: ""
  })

  const handleChange = (e)=> {
    setFormValue((prev) => ({...prev, [e.target.name]:e.target.value}))
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    // console.log(formValue)

    try {
      
      let res = await axios.post("http://localhost:3000/notes/create", formValue)
      // console.log(res)
      setFormValue({
        title:"",
        description:""
      })
      notesFetch()

    } catch (error) {
      console.log("error in note create api ", error)
    }


  }


  // delete notes

  // console.log(allNotes.length)
  let deleteNote = async (id)=>{
    try {
      let res = await axios.delete(`http://localhost:3000/notes/${id}`)
    // console.log(res)
    // console.log(allNotes.length)
      notesFetch()
    } catch (error) {
      console.log("error in delete api",error)
    }
    
  }

  //update note
  const [isEdit, setIsEdit] = useState(false)
  const [editId, setEditId] = useState(0)
  let editNote = (note)=>{
    setFormValue({
      title: note.title,
      description: note.description
    })
    setIsEdit(true)
    setEditId(note._id)

  }

  let updateNote = async (e)=>{
    e.preventDefault()
    // console.log(formValue)
    try {
      let res = await axios.put(`http://localhost:3000/notes/${editId}`, formValue)
   
      setFormValue({
        title:"",
        description:""
      })
      notesFetch()
    } catch (error) {
      console.log("error in update api",error)
    }
    
    setIsEdit(false)
    setEditId(true)
  }

  return (
    <div className="h-full p-5">
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <h1 className="text-4xl ml-5 text-center font-semibold">This is Note app</h1>

      <form 
        onSubmit={isEdit ? updateNote : handleSubmit} 
        className="flex flex-col m-5 gap-5 h-full  items-center">
        <input onChange={handleChange}
          name="title"
          value={formValue.title}
          className="outline-none w-fit
          text-3xl text-center"
          type="text"
          placeholder="Title"
          required
        />
        <textarea onChange={handleChange}
          name="description"
          value={formValue.description}
          className="
          outline-none
          w-2/3
          min-h-[calc(100vh*(2/3))]
          resize-none
          p-10
          border-l-2 border-red-300
          rounded-4xl
          bg-[#f4ecd8]
          bg-[linear-gradient(to_bottom,transparent_31px,#b7c9d3_32px)]
          bg-[size:100%_32px]
          font-['Caveat']
          text-2xl
          leading-8
          text-stone-800
          align-top"
          placeholder="Description..."
          minLength={10}
          required
        />

        {isEdit && <button  className="font-['Caveat']   w-30 h-10 hover:bg-yellow-500 font-bold text-black rounded-xl bg-yellow-200 ">Edit Note</button>}
        {!isEdit && <button  className="font-['Caveat']   w-30 h-10 hover:bg-yellow-500 font-bold text-black rounded-xl bg-yellow-200 ">Add Note</button>}
      </form>
      <div className="grid grid-cols-4 m-10 gap-4">

        {
          allNotes.map((note)=>{
            
            return <NoteCard 
            key={note._id} 
            id = {note._id} 
            note={note} 
            deleteNote={deleteNote} 
            editNote ={editNote}
            // isEdit={isEdit}
            // updateNote = {updateNote}
            />
          })
        }
      </div>
    </div>
  );
};

export default App;
