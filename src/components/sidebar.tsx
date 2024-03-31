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
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Chip, Stack } from '@mui/material';
import { grey, green } from '@mui/material/colors';
import { useState } from 'react';
import { AccountCard } from '.';

const width = 280;

export function Sidebar() {

    const [isActive, setIsActive] = useState('Home');

    return (
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
                <Toolbar  >
                    <Stack sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%"
                    }}>
                        <Stack>
                            <Typography variant='h4'
                                sx={{
                                    fontWeight: 700,
                                    backgroundClip: "text",
                                    textFillColor: "transparent",
                                    backgroundImage: `radial-gradient(circle at top left, #FFFF00 0%, ${green[800]} 100%)`,
                                }}
                            >
                                Carbon
                            </Typography>
                            <Typography variant='h5' fontWeight='bold'
                                sx={{
                                    backgroundClip: "text",
                                    textFillColor: "transparent",
                                    backgroundImage: "radial-gradient(circle at center center, #CBCAA5 0%, #334d50 100%)"
                                }}
                            >Cell</Typography>
                        </Stack>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>

                    </Stack>
                </Toolbar>
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
                    {SIDEBAR_PRIMARY_ITEMS.map((item, index) => {
                        const color = isActive === item.title ? green[500] : 'inherit'
                        return (
                            <ListItem
                                key={index} disablePadding>
                                <ListItemButton
                                    onClick={() => { setIsActive(item.title) }}
                                    sx={{ color }}
                                >
                                    <ListItemIcon sx={{ color }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title}
                                    />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
                <Box sx={{ my: '4rem' }} />

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
                                        background: green[800]
                                    }}
                                    size='small'
                                />)}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ my: '4rem' }} />
                <AccountCard />
            </Box>
        </Drawer >

    )
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

//243