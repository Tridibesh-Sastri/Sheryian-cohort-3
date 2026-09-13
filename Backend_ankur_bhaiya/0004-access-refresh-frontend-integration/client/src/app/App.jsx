import { useState } from 'react'
import router from './app.routes'
import { RouterProvider } from 'react-router'
import './App.css'
import { AuthProvider } from '../modules/auth/context/AuthContext'

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App
