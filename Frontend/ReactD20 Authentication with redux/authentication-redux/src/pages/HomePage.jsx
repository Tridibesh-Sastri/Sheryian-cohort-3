import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByValue } from '../features/counterSlice.jsx'

const HomePage = () => {
  let dispatch = useDispatch()
  const count = useSelector((store) => store.counter.count)

  return (
    <div>
      <h1>Home</h1>
      <h1>Welcome to the Home Page</h1>
      <h1>counter {count}</h1>

      <button 
      className='bg-blue-500 m-2 active:bg-blue-800 border-2 border-amber-200'
      onClick={() => dispatch(increment())}
      >Increment</button>
      <button 
      className='bg-blue-500 m-2 active:bg-blue-800 border-2 border-amber-200'
      onClick={() => dispatch(decrement())}
      >Decrement</button>
      <button 
      className='bg-blue-500 m-2 active:bg-blue-800 border-2 border-amber-200'
      onClick={() => dispatch(incrementByValue(5))}
      >Increment by 5</button>
    </div>
  )
}

export default HomePage
