import React from 'react'
import Login from './Components/Login'
import Auth from './Components/Auth'
import AllUsers from './Components/AllUsers'
import { useState } from 'react'

import UserCard from './Components/UserCard'
import Nav from './Components/Nav'

const App = () => {
    const [pagePtr, setPagePtr] = useState(0)
    
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
  {
    fullname: "Elena Rostova",
    username: "elena_r",
    email: "elena.rostova@example.com",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    password: "pass#1094"
  },
  {
    fullname: "Rohan Das",
    username: "rohan_d",
    email: "rohan.das@example.com",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
    password: "pass#3321"
  },
  {
    fullname: "Chloe Bennett",
    username: "chloeb",
    email: "chloe.bennett@example.com",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=80",
    password: "pass#8841"
  },
  {
    fullname: "Liam Walker",
    username: "liam_w",
    email: "liam.walker@example.com",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=80",
    password: "pass#6520"
  },
  {
    fullname: "Ananya Patel",
    username: "ananya_p",
    email: "ananya.patel@example.com",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80",
    password: "pass#9913"
  }
    ])
    const pages = [
      <Auth setUsers={setUsers} setPagePtr={setPagePtr}/>,
      <AllUsers users={users} setPagePtr={setPagePtr} setUsers={setUsers}/>,
      <UserCard/>,
      <Nav/>
    ]

    console.log("users from App:", users);


  return (
    <div className='  bg-slate-200'>
      {
        pages[pagePtr]
      }
      
    </div>
  )
}

export default App
