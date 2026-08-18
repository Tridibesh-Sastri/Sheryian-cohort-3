import React from 'react'
import Comp2 from './Comp2'
import {useContext} from 'react'
import {TestContext} from '../../context/TestConteext'

const Comp1 = () => {
  const {test, setTest} = useContext(TestContext) // we can use the context value in any component by using useContext hook and passing the context object to i

  return (
  
      <div className="comp1 relative w-150 h-150 flex flex-col items-center justify-around bg-gray-500 p-10">
        <h1>hey I'm Comp1</h1>
        <Comp2/>

        {/* <p className='text-white position-absolute top-0 left-0'>Likes: {test}</p> */}
      <button 
      onClick={() => setTest(test + 1)}
      className ='bg-none size-fit rounded-full ring-1 absolute right-2 top-2 text-white'
      >🩵</button>
      </div>

  )
}

export default Comp1
