import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home/Home"
import Services from "../pages/Services/Services"
import ContactUs from "../pages/Contact-Us/ContactUs"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact-us' element={<ContactUs />} />
    </Routes>
  )
}

export default AppRoutes