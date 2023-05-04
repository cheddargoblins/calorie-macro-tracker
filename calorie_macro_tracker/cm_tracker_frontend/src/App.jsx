import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { Outlet} from 'react-router-dom'

import './App.css'

function App() {
 
  
  return (
    <>
      <NavBar />
      <Outlet />

    </>
  )
}

export default App
