import { useState } from 'react'
import './App.css'
import RouterConfig from './config/RouterConfig'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <RouterConfig />
    </div>
  )
}

export default App
