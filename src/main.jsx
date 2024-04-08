import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme } from './common/theme';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider
      theme={createTheme({
        direction: 'ltr',
        responsiveFontSizes: true,
        mode: 'light',
      })}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
