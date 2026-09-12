import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { theme, GlobalStyle } from './styles'
import MainLayout from './layouts/MainLayout'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
