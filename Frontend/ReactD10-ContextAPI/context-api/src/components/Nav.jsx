import React from 'react'
import {useRef} from 'react'
import { useContext } from 'react'
import { WebContext } from '../context/WebContext'

const Nav = ({setRout}) => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    // console.log(homeRef.current.id);

    const {cartCount} = useContext(WebContext)
    // const cartCount = 12;

  return (
    <div >
        <nav className='flex justify-between items-center p-4 bg-gray-800 text-white '>
            <div className="logobox">I'm Logo</div>
            <div className="navlinks flex gap-8">
                <a href="#home" ref = {homeRef} id="home" onClick={() => setRout(homeRef.current.id)}>Home</a>
                <a href="#about" ref = {aboutRef} id="about" onClick={() => setRout(aboutRef.current.id)}>About</a>
                <a href="#contact" ref = {contactRef} id="contact" onClick={() => setRout(contactRef.current.id)}>Contact</a>
                <a href="#test" ref = {contactRef} id="test" onClick={() => setRout(contactRef.current.id)}>Test Context API</a>
            </div>
            <div className="endBtn">

                <button className="relative h-full flex justify-around gap-2 items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setRout('cart')}>
                    <span>Cart</span> 
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5     w-5 flex items-center justify-center">{cartCount}</span>
                        )}
                    <span >🛒</span>
                </button>
            </div>
        </nav>
      
    </div>
  )
}

export default Nav
