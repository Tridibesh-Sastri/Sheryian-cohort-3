import React from 'react'

const Nav = ({ setShowRegister }) => {
  return (
    <div className=''>
      <nav className='px-12 text-xl grid grid-cols-3 items-center justify-between p-3 rounded-b-2xl bg-linear-to-b from-slate-950 to-blue-800 text-white'>
        <div className='col-span-1 h-12 w-12 object-contain rounded-b-full ring-4 ring-blue-800 bg-blue-100'>
            <img src="https://png.pngtree.com/png-clipart/20241223/original/pngtree-cool-blue-dragon-logo-png-image_18141282.png" alt="" />
        </div>
        <div className='col-span-1'>
            <ul className='flex justify-between items-center gap-3'>
                <li><a className='hover:text-blue-700 ' href="#">About</a></li>
                <li><a onClick={() => setShowRegister(false)} className='hover:text-blue-400 ' href="#">Home</a></li>
                <li><a className='hover:text-blue-700 ' href="#">Contact</a></li>                  
            </ul>
        </div>
        <div className='col-span-1 h-12 flex justify-end items-center gap-3'>
            <button 
            onClick={() => setShowRegister(true)} 
            className='w-1/3 h-[80%]  bg-blue-500 text-center  rounded-2xl hover:bg-blue-800 font-black text-blue-950 cursor-pointer hover:text-blue-100 text-lg hover:w-5/12 hover:h-full transition  duration-300' >
              Create User
              </button>
        </div>
      </nav>
    </div>
  )
}

export default Nav
