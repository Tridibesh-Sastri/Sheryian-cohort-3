import React from 'react'
import Nav from './components/Nav'
import Test from './components/text/Test'
import { useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart'
import ProdBox from './components/ProdBox'

const App = () => {
  const [route, setRoute] = useState('home');

  const renderComponent = (route) => {
    switch (route) {
      case 'home':
        return <ProdBox />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'cart':
        return <Cart />;
      case 'test':
        return <Test />;
      default:
        return <ProdBox />;
    }
  }
  return (
    <div>
      <Nav setRout={setRoute} />
      {
        renderComponent(route) 
      }
      
    </div>
  )
}

export default App
