
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <AppRoutes/>
  </Provider>
)
