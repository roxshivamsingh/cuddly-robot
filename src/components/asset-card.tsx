import { Button, IconButton, Paper, Stack, Typography } from "@mui/material";
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { IAsset } from "../types/asset";

interface IProps {
    item: IAsset
}
export function AssetCard({ item }: IProps) {

    return (<Paper sx={{
        p: 2,
        borderRadius: 2,
        width: 250
    }}>
        <Stack spacing={2}>
            <Stack
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                <IconButton sx={{
                    background: item.color,
                    "&:hover": { background: item.color },
                    mr: 1
                }} >
                    <LandscapeOutlinedIcon />
                </IconButton>
                <Typography sx={{ fontWeight: 700 }}>
                    {item.name}
                </Typography>
            </Stack>
            <Typography>
                {item.description}
            </Typography>
            <Stack direction='row' justifyContent='space-between'>
                <Typography variant="h5" fontWeight='600'>
                    {item.variation} $
                </Typography>
                <Stack direction='row'>
                    <Typography>
                        {item.isIncrement ? '+' : '-'}{item.variation} $ &nbsp;
                    </Typography>
                    {item.isIncrement ? <TrendingUpIcon /> : <TrendingDownIcon />}
                </Stack>

            </Stack>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <ErrorOutlineOutlinedIcon
                    sx={{
                        color: item.color
                    }}
                />
                <Button sx={{
                    textTransform: "none",
                    background: item.color,
                    color: "white",
                    "&:hover": {

                        background: item.color,

                    }

                }}>
                    Trade
                </Button>
            </Stack>
        </Stack>
    </Paper >)
}