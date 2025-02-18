import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Detailform from './Components/UserPanel/FormFill/Detailform.jsx'
import Admin_Home from './Components/AdminPanel/Admin_Home.jsx'
import User_Home from './Components/UserPanel/User_Home.jsx'
import Login_Registration_Home_page from './Components/AdminPanel/Login_And_Singin/Login_Registration_Home_page.jsx'
import AdminLogin from './Components/AdminPanel/Login_And_Singin/AdminLogin.jsx'
import AdminRegistration from './Components/AdminPanel/Login_And_Singin/AdminRegistration.jsx'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path='adminhome' element={<Admin_Home />} />
      <Route path='loginRegistrationpage' element={<Login_Registration_Home_page />} />
      <Route path='loginadmin' element={<AdminLogin />} />
      <Route path='registrationadmin' element={<AdminRegistration />} />
      <Route path='userhome' element={<User_Home />} />
      <Route path='detailform' element={<Detailform />} />
    </Route>,
  ),
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
