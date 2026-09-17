import React, {useContext, useRef, useState} from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext'
import { data } from 'react-router'
import useApi from '../../../shared/api'

const Register = () => {
  const api = useApi()
  const navigate = useNavigate()

  const {testCounter, setTestCounter} = useAuth()
  const auth = useAuth()
  const [error, setError] = useState(null)

  const formData = useRef({
    name: "",
    email: "",
    password: ""
  })


  const onSubmit = async (e)=>{
    e.preventDefault()
    
    const data = {
      name : formData.current.name.value,
      email : formData.current.email.value,
      password : formData.current.password.value
    }

    
    console.log(data)
    await auth.setUser(data)
    // console.log("user in context",auth.user)
    
    try {
      const response = await api.post('/auth/register', data)
      console.log(response.data)  
      auth.setAccessToken(response.data.accessToken)
      auth.setUser(response.data.data.user)
    } catch (err) {
      setError(err?.message || "Registration Failed")
      console.log(error)
    }

    formData.current.name.value = ''
    formData.current.email.value = ''
    formData.current.password.value = ''

    navigate('/profile')

  }

  console.log(auth.accessToken)

  return (
    <div>
      Register
      <div
      className='w-ful flex justify-around rounded-2xl'
      >
        <button
        className='border-2 border-amber-500 w-20 rounded-2xl'
        onClick={()=>{setTestCounter((prev)=>((prev|| 0) + 1))}}
        > Click</button>
        <p> {`Count: ${testCounter}`}</p>
      </div>

      <form
      onSubmit={onSubmit}
      className='flex flex-col justify-around items-center w-100 h-150 bg-amber-950' action="">
        <input className='text-amber-950 pl-4 w-70 bg-amber-100 rounded-2xl h-10' type="text" ref={(e)=>{formData.current.name = e}} />
        <input className='text-amber-950 pl-4 w-70 bg-amber-100 rounded-2xl h-10' type="email" ref={(e)=>{formData.current.email = e}} />
        <input className='text-amber-950 pl-4 w-70 bg-amber-100 rounded-2xl h-10' type="password" ref={(e)=>{formData.current.password = e}} />

        <button className='bg-amber-400 w-25 h-10 text-amber-950 font-bold border-2 border-black rounded-2xl hover:scale-110 active:bg-amber-950 active:text-amber-50 active:border-amber-50'>Submint</button>
      </form>
    </div>
  )
}

export default Register
