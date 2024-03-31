import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

const drawerWidth = 240;
const SIDEBAR_ITEMS = [
  {
    title: 'Home',
    isActive: true,
    icon: <HomeOutlinedIcon />
  },
  {
    title: 'Organization',
    isActive: false,
    icon: <BusinessOutlinedIcon />
  },
  {
    title: 'Assets',
    isActive: false,
    icon: <CasinoOutlinedIcon />
  },
  {
    title: 'Trade',
    isActive: false,
    icon: <ImportExportOutlinedIcon />
  },

  {
    title: 'History',
    isActive: false,
    icon: <HourglassEmptyOutlinedIcon />
  },
  {
    title: 'Wallet',
    isActive: false,
    icon: <AccountBalanceWalletOutlinedIcon />
  },

];
function App() {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {SIDEBAR_ITEMS.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          remark..
        </Typography>

      </Box>
    </Box>
  )
}

export default App
