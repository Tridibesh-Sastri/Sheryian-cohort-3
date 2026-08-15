import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='bg-[#4eb9e3] p-4 w-1/6 rounded-lg shadow-lg'>
      <img src={props.image} alt="" />
      <div>
        <h2>{props.name}</h2>
        <p>{props.id}</p>
        {/* <p>{props.key}</p> */}
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={()=>{
            props.del(props.id)
        }}>Delete</button>
      </div>

    </div>
  )
}

export default ProductCard
