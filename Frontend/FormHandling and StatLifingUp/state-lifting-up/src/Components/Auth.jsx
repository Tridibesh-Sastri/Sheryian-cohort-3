import React from 'react'
import { useState } from 'react'
import Login from './Login'
import Register from './Register'

const Auth = ({setUsers, setPagePtr}) => {

    const [isLogin, setIsLogin] = useState(false)


  return (
    <div  className=' h-screen w-screen bg-slate-950'>
        {isLogin ? <Login setLogin={setIsLogin} setPagePtr={setPagePtr} /> : <Register setLogin={setIsLogin} setUsers={setUsers} setPagePtr={setPagePtr} />}
      
    </div>
  )
}

export default Auth
