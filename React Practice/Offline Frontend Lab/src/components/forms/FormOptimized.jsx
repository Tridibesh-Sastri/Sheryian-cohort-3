import React, { useEffect, useRef } from 'react'

const FormOptimized = () => {
    const renderCount = useRef(1)
    useEffect(()=>{
        renderCount.current+=1
    })
    console.log(`FormOptimized is rendered: ${renderCount.current}....................`)

    const formRef = useRef({})
    // console.log(formRef.current.name.value)

    const onSubmit = (e)=>{
        e.preventDefault()
        const data = {
            name: formRef.current.name.value,
            email: formRef.current.email.value
        }

        console.log(data)
    }


  return (
    <div>
        <form 
        onSubmit={onSubmit}
        className ='w-100 h-50 flex flex-col rounded-3xl bg-slate-700 justify-around items-center gap-3' 
        action=""
        >
            <input
            className='w-80 h-12 bg-sky-950 shadow-amber-200 shadow-2xs' 
            type="text"
            ref={(e)=>{formRef.current.name = e}}
             />

            <input
            className='w-80 h-12 bg-sky-950 shadow-amber-200 shadow-2xs' 
            type="email"
            ref={(elmennt)=>{formRef.current.email = elmennt}}
             />

             <button
             className='bg-amber-500 rounded-3xl w-24 h-12 hover:scale-3d hover:scale-110'
             >Submit</button>

        </form>
    </div>
  )
}

export default FormOptimized