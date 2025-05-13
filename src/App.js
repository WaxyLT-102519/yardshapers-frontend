import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';

import Home from './Home/Home'
import Header from './Header/Header';
import Services from './Services/Services';
import ContactUs from './Contact-Us/ContactUs';
import Footer from './Footer/Footer';

const theme = {
  primary: '#22f',
  muted: '#008'
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      <Footer />
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
