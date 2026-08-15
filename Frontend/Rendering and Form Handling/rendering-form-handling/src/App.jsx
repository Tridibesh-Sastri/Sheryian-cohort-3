import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState({ 
    name: "Raman",
  });




  return (
    <div>
      <h1>Count is - {count}</h1>
      <h1>User is - {user.name}</h1>

      <button onClick={
        () => {
          setCount(count + 1)
          user.name = "Trixion"
        }
      }>Increament</button>
      <button onClick={() => {
        user.name = "Sheryians"
        setCount(count+1)
        setUser( user)
        // count++;
      }}>Change name</button>
    </div>
  )
}

export default App
