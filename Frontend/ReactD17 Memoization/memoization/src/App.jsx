import React,{useState, useEffect, useMemo} from 'react'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Contact.jsx'

const App = () => {
  console.log("App component rendering............")

  const [count, setCount] = useState(0)


  // const about = () => <About />
  // stop extra rerendering of about using useMemo
  const memoAbout = useMemo(() => {
    return <About />
  }, [])


  
  return (
    <div className="bg-gray-800 text-white h-screen">
      <h1>MEMOIZATION</h1>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <Home />

      {
        memoAbout
      }

      <Contact />
    </div>
  )
}

export default App
