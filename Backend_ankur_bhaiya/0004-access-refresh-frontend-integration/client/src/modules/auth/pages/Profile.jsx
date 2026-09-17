import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import useApi from '../../../shared/api'
// import { useFetchUser } from '../api/auth.api'

const Profile = () => {
  const {user, setUser} = useAuth()
  const api = useApi()

console.log('profile rendering ...............')

  async function fetchUser(){

    const res = await api.get('/auth/me')
    setUser(res.data.data.user)
    console.log(res.status)
    console.log(res.data)
  }

  // const {fetchUser} = useFetchUser()

  useEffect(()=>{
    fetchUser()
  },[])

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-zinc-500 font-medium">No user profile found.</p>
      </div>
    )
  }

  const initial = user.name ? user.name.trim().charAt(0).toUpperCase() : 'U'

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-zinc-900 border border-zinc-800 text-zinc-100 rounded-xl shadow-lg">
      <div className="flex items-center gap-4 pb-6 border-b border-zinc-800">
        <div className="w-14 h-14 rounded-full bg-amber-600 flex items-center justify-center text-xl font-bold text-white shadow-inner">
          {initial}
        </div>
        <div>
          <h2 className="text-lg font-semibold capitalize">{user.name?.trim()}</h2>
          <p className="text-xs text-zinc-400">Account details</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-500 font-medium mb-1">
            Display Name
          </label>
          <div className="p-3 bg-zinc-800/60 border border-zinc-800 rounded-lg text-sm">
            {user.name?.trim()}
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-500 font-medium mb-1">
            Email Address
          </label>
          <div className="p-3 bg-zinc-800/60 border border-zinc-800 rounded-lg text-sm text-zinc-300">
            {user.email}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile