import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Content, Sidebar } from './components';
// const width = 280;

function App() {


  return (<Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <Sidebar />
    <Content />
  </Box >
  )
}

export default App


//243