import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home/Home'
import Header from './Header/Header';
import Services from './Services/Services';
import ContactUs from './Contact-Us/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
