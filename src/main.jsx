import React from 'react'
import ReactDOM from 'react-dom/client'
import HolaMundo from './components/HolaMundo.jsx'
import Variables from './components/variables.jsx'
import Contador from './components/Contador.jsx'
import PeticionApi from './components/PeticionApi.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PeticionApi />
  </React.StrictMode>,
)
