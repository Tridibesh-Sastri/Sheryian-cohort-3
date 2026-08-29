import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import AppRouter from './routes/AppRoutes.jsx'
import { StoreContextProvider } from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <StoreContextProvider>
    <AppRouter />
  </StoreContextProvider>


)
