import React from 'react'
import Comp4 from './Comp4'
import { useContext } from 'react'
import { TestContext } from '../../context/TestConteext'


const Comp3 = () => {
  const {test3, setTest3} = useContext(TestContext) // we can use the context value in any component by using useContext hook and passing the context object to it

  return (
    <div className='relative bg-yellow-400 w-60 h-60 flex flex-col items-center p-5 justify-around'>
      <h3>hey I'm Comp3</h3>
        <Comp4/>
        {/* <p className='text-white position-absolute top-0 left-0'>Likes: {test3}</p> */}
      <button 
      onClick={() => setTest3(test3 + 1)}
      className ='bg-none size-fit rounded-full ring-1 absolute right-2 top-2 text-white'
      >
        🩷
      </button>
    </div>
  )
}

export default Comp3
