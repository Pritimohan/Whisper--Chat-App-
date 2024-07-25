// import { useState } from 'react'


import './App.css'
import Header from './components/Header.jsx'
import { Home } from "./pages/pages.jsx"
import { Toaster } from 'react-hot-toast'
import { Outlet } from "react-router-dom"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Toaster />
      <Header />
      <Outlet/>
    </>
  )
}

export default App
