// import { StrictMode } from 'react' // Strict mode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants. Strict mode checks are run in development mode only; they do not impact the production build.
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test from './Test.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <div>
      <h1>Hello</h1>
      <h2> guys!</h2>
      <Test width="300" name="gopal" age={25}/>
      <div>break</div>
      <Test width="100" name="Ramu" age={28}/>

      <Test width="200" name="papu" age={27}>
        <h2>hi- it's passed as children</h2>
      </Test>
     
      <App/>

    </div>

  // </StrictMode>,
)
