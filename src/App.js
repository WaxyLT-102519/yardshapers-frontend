import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import MainLayout from './layouts/MainLayout'
import AppRoutes from './routes/AppRoutes'

const theme = {
  primary: '#22f',
  muted: '#008',
  card: {
    border: {
      hovered: '10px solid white',
      style: '3px solid #22f',
      radius: '50px',
    },
    shadow: '0 0 10px rgba(0, 0, 0, 0.5)'
  }
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
