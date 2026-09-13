import React from 'react'
import {useForm} from 'react-hook-form'
import axios from  'axios'


const App = () => {

  const {register, handleSubmit, reset} = useForm()

  const submitHandler = async (data)=>{
    console.log(data)
    const formData = new FormData()

    formData.append("name", data.name)
    formData.append("email", data.email)
    if (data.profile_pic && data.profile_pic[0]) {
      formData.append(
        'profile_pic',
        data.profile_pic[0]
      )
    }
    if (data.images && data.images.length > 0) {
  for (let i = 0; i < data.images.length; i++) {
    formData.append("images", data.images[i])
  }
}
    // console.log(formData) // form Data is an javascript built in object that transfer data frmo client to server
    try {
      let res = await axios.post('http://localhost:3000/user/create', formData)
      console.log(res)
    } catch (error) {
      console.log("can't able to send data to server api error: ",error)
    }


    reset()
  }
  

  return (
    <div>

      <form 
      className='flex flex-col items-center gap-10 mt-5'
      onSubmit={handleSubmit(submitHandler)}
      action=""
      >
        <input 
          {...register('name')}
          className='border-none outline-none bg-blue-950 rounded p-2 '
          type="text" 
          name="name" 
          id="" 
          placeholder='Enter Your Name'
          />
        <input 
          {...register('email')}
          className='border-none outline-none bg-blue-950 rounded p-2 '
          type="email"
          name="email"
          id="" 
          placeholder='Enter Your Email'
          />
        <input 
          {...register('profile_pic')}
          className='border-none outline-none bg-blue-950 rounded p-2 '
          type="file" 
          name="profile_pic" 
          id=""
          placeholder='Enter Your ProfilePIc'
        />
        <input 
          {...register('images')}
          className='border-none outline-none bg-blue-950 rounded p-2 '
          type="file" 
          multiple
          name="images" 
          id=""
          placeholder='Enter Your ProfilePIc'
        />

        <button className='border-2 rounded p-1 bg-blue-200 text-black font-bold'>Submit Form</button>
      </form>
    </div>
  )
}

export default App
