import React, { useEffect, useRef, useState } from 'react'

const FormBetter = () => {
    const renderCount = useRef(1)
    useEffect(()=>{
        renderCount.current+=1
    })
    console.log (`FormBetter rendering count: ${renderCount.current}............`)


    const [formData, setFormData] = useState({
        name:"",
        email:""
    })
    console.log(formData)
    
  
      
  return (
    <div className='w-full'>
        <form 
        className='flex flex-col w-50 bg-slate-600 gap-4 items-center p-10'
        >
            <input
            onChange={(e)=>{
                setFormData({...FormBetter,name:e.target.value})
            }}
            className='bg-yellow-300' 
            type="text" 
            />
            <input
            onChange={(e)=>{
                setFormData({...FormBetter,email:e.target.value})
            }}
            className='bg-yellow-300' 
            type="email" />
            <button
            className='bg-black text-white w-30'
            >Submit</button>
        </form>
    </div>
  )
}

export default FormBetter