import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Home from './Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Services from './Services/Services'
import ContactUs from './Contact-Us/ContactUs'

const theme = {
  primary: '#22f',
  muted: '#008',
  card: {
    border: '50px',
    shadow: '0 0 10px rgba(0, 0, 0, 0.5)'
  } 
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
