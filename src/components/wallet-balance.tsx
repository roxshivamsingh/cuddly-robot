import { Box, Button, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: [],
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
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
            // width: "1rem"
        },
    ],
};

export function WalletBalance() {
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
                    <Box sx={{
                        width: "15rem"
                    }}>
                        <Doughnut data={data}
                            style={{ alignSelf: "center" }}
                        />
                    </Box>

                </Box>
                {/* <ChartExample /> */}
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    // background: "red"
                }}>
                    <Grid container spacing={1}>
                        <Grid item xs={6} sm={6} md={6} lg={6}>USDT</Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} sx={{ textAlign: "right" }}>$500.0</Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} >NBST</Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} sx={{ textAlign: "right" }}>$500.0</Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>EFT</Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} sx={{ textAlign: "right" }}>$500.0</Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>WET</Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} sx={{ textAlign: "right" }}>$500.0</Grid>
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

    </Paper>)
}