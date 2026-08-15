import React from 'react'
import { useState } from 'react'
import Login from './Login'
import Register from './Register'

const Auth = () => {

    const [isLogin, setIsLogin] = useState(false)


  return (
    <div  className='flex justify-center items-center h-screen w-screen bg-slate-950'>
        {isLogin ? <Login setLogin={setIsLogin} /> : <Register setLogin={setIsLogin} />}
      
    </div>
  )
}

export default Auth
