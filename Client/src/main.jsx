import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Detailform from './Components/UserPanel/FormFill/Detailform.jsx'
import Admin_Home from './Components/AdminPanel/Admin_Home.jsx'
import User_Home from './Components/UserPanel/User_Home.jsx'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path='Adminhome' element={<Admin_Home />} />
      <Route path='Userhome' element={<User_Home />} />
      <Route path='detailform' element={<Detailform />} />
    </Route>,
  ),
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
