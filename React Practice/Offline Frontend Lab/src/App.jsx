import React, { useEffect, useRef } from 'react'
import FormBruteForce from './components/forms/FormBruteForce'
import FormBetter from './components/forms/FormBetter'
import FormDry from './components/forms/FormDry'
import Anime from './components/Anime.Sample'
import FormOptimized from './components/forms/FormOptimized'

const App = () => {
  const renderCount = useRef(1)
  useEffect(()=>{
    renderCount.current +=1
  })
  // const [renderCount, setRenderCount] = useState(1)
      console.log('App is rendering................... ', renderCount.current)
  return (
    <div>
      <h1 className='bg-slate-900 text-white font-bold'>Hi I'm app</h1>
      <FormBruteForce/>
      <FormBetter/>
      <FormDry/>
      <FormOptimized/>
      <Anime/>
    </div>
  )
}

export default App
