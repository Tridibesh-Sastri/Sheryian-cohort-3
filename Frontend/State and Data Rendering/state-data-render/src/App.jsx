import React from 'react'
import ProductCard from './components/ProductCard'
import Hero from './components/Hero'
import Nav from './components/Nav'  



import {useState} from 'react'

const App = () => {
  const [view, setView] = useState('Products')



  return (
    <div >
      <Nav setView={setView} />
      <h1>
        {view}
      </h1>

      <Hero view={view} />


      {/* {view == 'Products' && <Hero />}
      {view == 'Counter' && <Counter />}
      {view == 'Name Changer' && <NameChanger />}
      {view == 'Show / HideBox' && <div>Hi I'm Show / HideBox</div>}
      {view == 'Like Button' && <div>Hi I'm Like Button</div>}
      {view == 'Character Counter' && <div>Hi I'm Character Counter</div>}
      {view == 'Temperature Converter' && <div>Hi I'm Temperature Converter</div>}
      {view == 'Login' && <div>Hi I'm Login</div>}
      {view == 'Digital Toggle' && <div>Hi I'm Digital Toggle</div>}
      {view == 'Shopping Cart' && <div>Hi I'm Shopping Cart</div>} */}
    </div>
  )
}

export default App

