import React, {useState, useEffect, useRef} from 'react'

const FormBruteForce = () => {
    const renderCount = useRef(1)

    // // 2. Track renders synchronously during the render phase
    // // (or increment inside an empty useEffect to track completed renders)
    useEffect(() => {
        renderCount.current += 1
    })

    // const [renderCount, setRenderCount] = useState(1)
    console.log('FormBruteForce is rendering................... : ', renderCount.current || renderCount)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    // const [, setName] = useState(null)
    console.log("Name : ",name)

    // useEffect(() => {
    //     setRenderCount(renderCount+1)
    // }, [name])
    const handleSubmil = (e)=>{
        console.log(e)
        e.preventDefault()
    }

  return (
    <div>
      <form onSubmit={handleSubmil}>
        <input 
        className='bg-black text-white rounded w-50 h-12 hover:bg-yellow-600'
        type="text" 
        // value={name}
        onChange={(event)=>{setName(event.target.value)}}
         />
         <input 
         name='email'
        className='bg-black text-white rounded w-50 h-12 hover:bg-yellow-600'
        type="email" 
        // value={email}
        onChange={(event)=>{setName(event.target.value)}}
         />

         <button className='w-30 bg-yellow-600 active:bg-slate-400'>Submit</button>
      </form>
    </div>
  )
}

export default FormBruteForce
