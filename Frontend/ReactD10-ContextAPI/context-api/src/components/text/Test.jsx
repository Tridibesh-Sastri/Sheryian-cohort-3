import {React, useContext} from 'react'
import Nav from '../Nav'
import Comp1 from './Comp1'
import {TestContext} from '../../context/TestConteext'


const Test = () => {
  const {test, test2,test3, test4} = useContext(TestContext) // we can use the context value in any component by using useContext hook and passing the context object to it
  return (
    <div className='flex  gap-4 items-center justify-around h-screen bg-gray-200'>
      
      <div>
        <h1 className='text-2xl font-bold text-gray-800 py-4'>Like Results</h1>
        <p>component1 likes : {test}</p>
        <p>component2 likes : {test2}</p>
        <p>component3 likes : {test3}</p>
        <p>component4 likes : {test4}</p>
      </div>

      <Comp1 />

    </div>
  )
}

export default Test
