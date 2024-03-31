import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Badge, Chip } from '@mui/material';
import { grey } from '@mui/material/colors';
// import DirectionsIcon from '@mui/icons-material/Directions';

const width = 280;


function App() {

  return (<Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <Drawer
      sx={{
        width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width,
          background: grey[900],
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box >
        <Toolbar />
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            m: 1,
            background: grey[800],
          }}
        >
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search.."
            inputProps={{ 'aria-label': 'search' }}
          />

        </Paper>
        <List>
          {SIDEBAR_PRIMARY_ITEMS.map((item, index) => (
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
        {/* <Divider /> */}
        <List>
          {SIDEBAR_SECONDARY_ITEMS.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />

                {item.title?.toLowerCase() === 'notifications' && (<Chip label={2} variant='outlined'
                  sx={{
                    borderRadius: 1,
                    width: "2rem",
                    background: "green"
                  }}
                  size='small'
                />)}


              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <AccountCard />

      </Box>
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

function AccountCard() {
  return (
    <Card sx={{
      m: 1,
      background: grey[800],
    }}>
      <CardHeader
        avatar={<Badge variant='dot' color='secondary'>
          <AccountCircleOutlinedIcon fontSize='large' />
        </Badge>}
        action={<IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>}
        title="Shivam Singh"
        subheader="example@gmail.com"
      />
    </Card>);
}

const SIDEBAR_PRIMARY_ITEMS = [
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
const SIDEBAR_SECONDARY_ITEMS = [
  {
    title: 'Notifications',
    icon: <NotificationsNoneIcon />,
  },
  {
    title: 'Support',
    icon: <HelpOutlineOutlinedIcon />,
  },
  {
    title: 'Settings',

    icon: <SettingsOutlinedIcon />
  }
]