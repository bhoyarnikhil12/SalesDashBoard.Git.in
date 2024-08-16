import { useState } from 'react'
import './App.css'
import Sidebar from './componants/Sidebar'
import Home from './componants/Home'
import Header from './componants/Header'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <Home/>
  </div>
  )
}

export default App
