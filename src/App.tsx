import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import { Sidebar } from './components';

// const width = 280;

function App() {

  return (<Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <Sidebar />
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >
      <Toolbar />
      <Typography paragraph>
        Still in progress roxshivamsingh@gmail.com
      </Typography>
    </Box>

  </Box >
  )
}

export default App


//243