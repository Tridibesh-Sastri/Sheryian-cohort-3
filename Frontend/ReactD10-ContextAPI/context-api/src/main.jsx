import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TestContextProvider } from './context/TestConteext.jsx'
import {WebContextProvider} from './context/WebContext.jsx'

createRoot(document.getElementById('root')).render(
    <WebContextProvider>
    <TestContextProvider>
        <App />
    </TestContextProvider>
    </WebContextProvider>
)
