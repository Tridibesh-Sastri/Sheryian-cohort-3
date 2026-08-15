import React from 'react'

const Nav = ({ setPagePtr }) => {
  return (
    <div>
      <nav>
        <div className='h-[80px] bg-slate-950 p-4 flex justify-center items-center gap-4'>
            <button onClick={() => setPagePtr(0)} className='text-white hover:text-gray-300'>Register</button>
            <button onClick={() => setPagePtr(1)} className='text-white hover:text-gray-300'>All Users</button>
        </div>
      </nav>
    </div>
  )
}

export default Nav
