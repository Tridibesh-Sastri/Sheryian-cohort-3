import React from 'react'
import { useContext } from 'react'
import { TestContext } from '../../context/TestConteext'

const Comp4 = () => {

  const {test4, setTest4} = useContext(TestContext) // we can use the context value in any component by using useContext hook and passing the context object to it

  return (
    <div className='bg-red-400 w-30 h-30 flex flex-col p-4 items-center justify-around relative'>
      <h4>hey I'm <br /> Comp4</h4>
      {/* <p className='text-white position-absolute top-0 left-0'>Likes: {test4}</p> */}
      <button 
      onClick={() => setTest4(test4 + 1)}
      className ='bg-none size-fit rounded-full ring-1 absolute right-2 top-2 text-white'
      >🩵</button>
    </div>
  )
}

export default Comp4
