import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { Line } from "react-chartjs-2";
const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        },
        {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774"
        }
    ]
};


export function MarketChart() {
    return (<Paper sx={{ p: 2, borderRadius: 3 }}>
        <Stack spacing={2}>
            <Typography variant='h5' gutterBottom sx={{ textAlign: "center" }}>
                Market Overview
            </Typography>
            <Divider />

            <Stack spacing={2} >
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    // width: "50rem",
                }}>
                    <Line data={data} />
                </Box>
                {/* xsxs */}
                {/* <ChartExample /> */}
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    // background: "red"
                }}>
                </Box>

                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography>
                        Get in depth charts in Trade
                    </Typography>
                    <Button
                        size="large"
                        sx={{
                            textTransform: "none",
                            background: green[600],
                            color: "white",
                            "&:hover": { background: green[700] }
                        }}
                        variant='contained'>
                        Trade
                    </Button>
                </Stack>
            </Stack>
        </Stack>

    </Paper>)
}