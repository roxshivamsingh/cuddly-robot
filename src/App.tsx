import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';


import { Content, Sidebar } from './components';
import axios from 'axios';
import { useEffect } from 'react';

// const width = 280;

function App() {

  useEffect(() => {


    axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then((response) => {

      console.log(response.data)
    })
  }, [])

  return (<Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <Sidebar />
    <Content />
  </Box >
  )
}

export default App


//243