import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './features/counterSlice'

const App = () => {

  let dispatch = useDispatch();

  const { count } = useSelector((state) => state.counter);

  return (
    <div className="bg-gray-800 text-white h-screen">
      <h1>Welcome to the App</h1>
      <h1>Count is {count}</h1>

      <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
      onClick={() => dispatch(increment("this is increment payload"))}
      >
        Increment
      </button>
      <button 
      className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
      onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  )
}

export default App
