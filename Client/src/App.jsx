import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
