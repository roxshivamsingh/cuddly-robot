import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { grey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material';

import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme(({
  palette: {
    mode: 'dark',
    // palette values for dark mode
    // primary: deepOrange,
    // divider: deepOrange[700],
    background: {
      // default: deepOrange[900],
      // paper: deepOrange[900],
    },
    text: {
      primary: '#fff',
      secondary: grey[500],
    },
  },
}));


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
