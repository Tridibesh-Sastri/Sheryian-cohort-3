import React from 'react'
import UserCard from './UserCard'
import { useState } from 'react'

const Home = ({ users, setUsers, setShowRegister }) => {

  const onDelete = (email) => {
    setUsers(users.filter((user) => user.email !== email))
    console.log(`Deleted user with email: ${email}`);
    console.log('Updated users:', users);
  }

  return (
    <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:grid-rows-2 gap-4 p-4 min-h-0 overflow-y-auto lg:overflow-hidden'>{
        users.map((user,index) => (
          <UserCard key={index} user={user} onDelete={onDelete} setShowRegister={setShowRegister} />
        ))
      }
    </div>
  )
}

export default Home
