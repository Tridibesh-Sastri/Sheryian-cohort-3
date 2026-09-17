import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap"
import { animate, createScope, spring, createDraggable } from 'animejs';

const FormDry = () => {
 

    const renderCount = useRef(1)
    useEffect(()=>{
        renderCount.current+=1

           // This is a Tween 
        gsap.to(".box", { rotation: 27, x: 100, duration: 1 });

        // And this is a Timeline, containing three sequenced tweens
        let tl = gsap.timeline();
        tl.to("#green", {duration: 1, x: 786})
          .to("#blue", {duration: 2, x: 786})
          .to("#orange", {duration: 1, x: 786})
    })
    console.log(`FormDry is rendered: ${renderCount.current}...............`)

    const [formData, setFormData] = useState({
        name:"",
        email:""
    })
    const handleChange = (e)=>{
        const {name, value} = e.target
        console.log(name)
        setFormData({...formData,[name]:value })
    }

    

    console.log(formData)
  return (
    <div>
        <form className='box flex flex-col w-100 items-center bg-blue-950 text-white rounded p-10'>
            <input 
            name='name'
            className='orange '
            onChange={handleChange}
            type="text" 
            placeholder='Enter Your Name'/>

            <input 
            name='email'
            className='green '
            onChange={handleChange}
            type="text" 
            placeholder='Enter Your Email'/>

        </form>
    </div>
  )
}

export default FormDry