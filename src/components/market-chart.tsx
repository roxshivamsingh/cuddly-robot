import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { Line } from "react-chartjs-2";
import { APIs, IMarketItem } from "../types/market";
import { useEffect, useState } from "react";
import axios from "axios"
import _ from "lodash";
const _data: IMarketItem = {
    labels: [],
    datasets: [
        {
            color: "white",
            label: "Population",
            data: [33, 53, 85, 41, 44, 65],
            borderColor: green[800]
        },
    ]
};


export function MarketChart() {
    const [data, setData] = useState<IMarketItem>(_data);

    useEffect(() => {
        axios.get(APIs.Population).then((response) => {
            const results = response?.data?.data;
            if (response.status === 200) {
                setData((prev) => ({
                    ...prev,
                    labels: _.map(results, 'Population').reverse(),
                    datasets: [
                        {
                            ...prev.datasets[0],
                            data: _.map(results, 'Year').reverse(),
                        }
                    ]
                }
                ))

            }

        })

    }, [])

    return (<Paper sx={{ p: 2, borderRadius: 3 }}>
        <Stack spacing={2}>
            <Typography variant='h5' gutterBottom sx={{ textAlign: "center" }}>
                Population Overview
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