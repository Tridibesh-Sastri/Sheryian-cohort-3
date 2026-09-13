import React, {useContext} from 'react'
import {useAuth} from '../context/AuthContext'

const Profile = () => {

  const {user, setUser} = useAuth()

  console.log('user:',user)

  return (
    <div>
      Profile
      <button
      onClick={()=>{setUser((prev)=>(Number(prev)||0) + 1)}} 
      className='w-20 h-10 bg-amber-600 rounded border-0'>click</button>
    </div>
  )
}

export default Profile
