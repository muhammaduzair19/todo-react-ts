import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme.ts'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    {/* THEME PROVIDER */}
    <ThemeProvider theme={theme}>

      {/* BASIC CSS  */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
