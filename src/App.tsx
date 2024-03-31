import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Content, Sidebar } from './components';
// const width = 280;
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';

function App() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('lg'));

  return (<Box sx={{ display: 'flex' }}>
    <CssBaseline />
    {!matches && <Sidebar />}

    <Content />
  </Box >
  )
}

export default App


//243