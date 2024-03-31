import { green } from "@mui/material/colors";
import {
    Box,
    Button,
    Fade,
    Grid,
    Menu,
    MenuItem,
    Stack,
    Typography
} from "@mui/material";
import { AssetCard, RecentPost, WalletBalance } from ".";
import { MarketChart } from "./market-chart";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { _assets } from "../types/asset";
export function Content() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (<Box
        className="donut"
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2 }}
    >
        <CustomHeader />

        <Box sx={{ my: 3 }} />
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={5}>
                <MarketChart />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3}>
                <WalletBalance />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
                <RecentPost />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>

                <Stack direction='row' justifyContent='space-between'>
                    <Typography variant="h6">Assets</Typography>
                    <Button
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        sx={{ color: "white", textTransform: "none" }}
                    >
                        Today
                    </Button>
                </Stack>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleClose}>Today</MenuItem>
                    <MenuItem onClick={handleClose}>Tomorrow</MenuItem>
                    <MenuItem onClick={handleClose}>Yesterday</MenuItem>
                </Menu>

            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Stack spacing={1} direction='row' justifyContent='space-between'
                >
                    {_assets?.map((item, i) => (<AssetCard key={i}

                        item={item}
                    />))}
                </Stack>
            </Grid>
        </Grid>
    </Box >
    );
}
function CustomHeader() {
    return (<Stack direction='row' justifyContent='space-between'>
        <Stack>
            <Box sx={{
                fontWeight: 700,
                fontSize: "2rem",
                display: "flex"
            }}>
                Hello, <Box
                    sx={{
                        backgroundClip: "text",
                        textFillColor: "transparent",
                        backgroundImage: `radial-gradient(circle at top left, ${green[800]} 0%, #FFFF00 100%)`,
                    }}>
                    &nbsp; Shivam Singh 👋
                </Box>
            </Box>
            <Box sx={{ fontSize: '20px', fontWeight: 500 }}>
                Welcome to <span style={{ color: green[600] }}> Spot trading!</span>
            </Box>
        </Stack>

        <Stack justifyContent='center'>
            <Button
                size="large"
                variant="contained"
                sx={{
                    textTransform: "none",
                    background: green[600],
                    color: "white",
                    "&:hover": { background: green[700] }
                }}>
                Start Trading
            </Button>
        </Stack>
    </Stack>)
}