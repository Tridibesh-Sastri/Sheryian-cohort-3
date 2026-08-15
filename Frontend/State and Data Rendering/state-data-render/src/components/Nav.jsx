import React from 'react'

const Nav = (props) => {
  return (
    <div>
      <nav className="bg-[#4eb9e3] p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-xl">My App</div>
            <div className="space-x-4">
              <a href="#" onClick={(e) => props.setView('Counter')} className="text-white hover:text-gray-300">Counter</a>
              <a href="#" onClick={(e) => props.setView('Products')} className="text-white hover:text-gray-300">Products</a>
              <a href="#" onClick={(e) => props.setView('Name Changer')} className="text-white hover:text-gray-300">Name Changer</a>
              <a href="#" onClick={(e) => props.setView('Show / HideBox')} className="text-white hover:text-gray-300">Show / HideBox</a>
              <a href="#" onClick={(e) => props.setView('Like Button')} className="text-white hover:text-gray-300">Like Button</a>
              <a href="#" onClick={(e) => props.setView('Character Counter')} className="text-white hover:text-gray-300">Character Counter</a>
              <a href="#" onClick={(e) => props.setView('Temperature Converter')} className="text-white hover:text-gray-300">Temperature Converter</a>
              <a href="#" onClick={(e) => props.setView('Login')} className="text-white hover:text-gray-300">Login</a>
              <a href="#" onClick={(e) => props.setView('Digital Toggle')} className="text-white hover:text-gray-300">Digital Toggle</a>
              <a href="#" onClick={(e) => props.setView('Shopping Cart')} className="text-white hover:text-gray-300">Shopping Cart</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
