import React from 'react'
import Comp3 from './Comp3'
import { useContext } from 'react'
import {TestContext} from '../../context/TestConteext'

const Comp2 = () => {
  const {test2, setTest2} = useContext(TestContext) // we can use the context value in any component by using useContext hook and passing the context object to it
  return (
    <div className='relative bg-blue-400 w-110 h-110 flex flex-col items-center p-5 justify-around'>
        <h2>hey I'm Comp2</h2>
        <Comp3/>
        {/* <p className='text-white position-absolute top-0 left-0'>Likes: {test2}</p> */}
      <button 
      onClick={() => setTest2(test2 + 1)}
      className ='bg-none size-fit rounded-full ring-1 absolute right-2 top-2 text-white'
      >💗</button>
    </div>
  )
}

export default Comp2
