import React from 'react'

const UrlBox = ({originalURL,fetchUrl, shortCode, clickCount, deleteURL,redirectURL}) => {
    // console.log(originalURL)
    const handleClick =()=>{
        window.open(`http://localhost:3000/${shortCode}`)
        fetchUrl()
    }

  return (
    <div className='flex justify-evenly gap-2 p-4 border-1 bg-yellow-100'>
        <a
        onClick={()=>{handleClick()}}
        className='cursor-pointer'
        >{shortCode}</a>
        <p className='truncate w-[600px]' >{originalURL}</p>
        <p>{clickCount}</p>
        <button 
        onClick={()=>{deleteURL(shortCode)}}
        className='cursor-pointer px-4 bg-amber-500  rounded-xl'>Delete</button>
    </div>
  )
}

export default UrlBox