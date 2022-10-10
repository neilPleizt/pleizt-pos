import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import Login from './pages/Login'
import { pleiztTheme } from './common/utils/styles/Theme'
import GlobalStyles from './common/utils/styles/GlobalStyles'
import './public/styles/index.css'

const root = createRoot(document.getElementById('app'))

root.render(
  <React.StrictMode>
    <ThemeProvider theme={pleiztTheme}>
      <GlobalStyles />
      <Login />
    </ThemeProvider>
  </React.StrictMode>
)
