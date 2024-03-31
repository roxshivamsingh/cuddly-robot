import { Box, Button, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2';
import { APIs, ICryptoItem } from "../types/market";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
ChartJS.register(ArcElement, Tooltip, Legend);

const _data = {
    labels: [],
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: 'Crypto amount',

            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export function WalletBalance() {

    const [rows, setRows] = useState<ICryptoItem[]>([]);

    useEffect(() => {
        axios.get(APIs.Crypto).then((response) => {
            if (response?.status === 200) {
                setRows(Object.values(response.data.bpi))
            }
        })
    }, [])

    return (<Paper sx={{ p: 2, borderRadius: 3 }}>
        <Stack spacing={2}>
            <Typography variant='h5' gutterBottom sx={{ textAlign: "center" }}>
                Wallet Balance
            </Typography>
            <Divider />

            <Stack spacing={1} >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Box sx={{ width: "15rem" }}>
                        <Doughnut data={{
                            ..._data,
                            // labels: rows?.map((row) => row.code),
                            datasets: [{
                                ..._data.datasets[0],

                                data: rows?.map((row) => row.rate_float)
                            }]

                        }} style={{ alignSelf: "center" }} />
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Grid container spacing={1}>

                        {rows?.map((row, i) => {
                            const color = _data.datasets[0].backgroundColor[i]
                            return (<>
                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                    <Stack direction='row'>
                                        <FiberManualRecordIcon fontSize="small" sx={{ color }} /> &nbsp;
                                        {row.code}
                                    </Stack>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: "flex", flexDirection: "row-reverse" }}>
                                    <Stack direction='row'>
                                        <div dangerouslySetInnerHTML={{ __html: row.symbol }} />
                                        {row.rate_float}
                                    </Stack>
                                </Grid>

                            </>)
                        })}

                    </Grid>
                </Box>
                <Button
                    size="large"
                    sx={{
                        textTransform: "none",
                        background: green[600],
                        color: "white",
                        "&:hover": { background: green[700] }
                    }}
                    variant='contained'>
                    Manage Wallet
                </Button>
            </Stack>
        </Stack>

    </Paper >)
}