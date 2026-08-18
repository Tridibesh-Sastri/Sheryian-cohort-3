import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Register from './components/Register'
import { useState } from 'react'

const App = () => {
  
  const [users, setUsers] = useState([
    {
    fullname: "Aarav Sharma",
    username: "aarav_s",
    email: "aarav.sharma@example.com",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    password: "pass#9821"
  },
  {
    fullname: "Sophia Chen",
    username: "sophia_c",
    email: "sophia.chen@example.com",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80",
    password: "pass#4412"
  },
  {
    fullname: "Marcus Vance",
    username: "mvance",
    email: "marcus.vance@example.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    password: "pass#7730"
  },
  ])

  let [showRegister, setShowRegister] = useState(false);
  
  return (
    <div className='px-4 h-full bg-linear-to-t from-blue-400 to-blue-200'>
      <Nav setShowRegister={setShowRegister} />
      
      {showRegister ? <Register setUsers={setUsers} setShowRegister={setShowRegister} /> : <Home users={users} setUsers={setUsers} setShowRegister={setShowRegister} />}
    </div>
  )
}

export default App
