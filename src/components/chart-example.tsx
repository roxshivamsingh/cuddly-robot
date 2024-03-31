import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {
    Pie,
    // Line,
    // Doughnut,
    // PolarArea,
    // Bubble
} from 'react-chartjs-2';



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis',
        },
    },
    scales: {
        y: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
        },
        y1: {
            type: 'linear' as const,
            display: true,
            position: 'right' as const,
            grid: {
                drawOnChartArea: false,
            },
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [0, 2, 3],
            // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y',
        },
        {
            label: 'Dataset 2',
            data: [1, 2, 100],

            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y1',
        },
    ],
};

export function ChartExample() {
    return (<>
        {/* <Line options={options} data={data} /> */}

        <Paper sx={{
            p: 1,

        }}>
            <Typography variant='h5' gutterBottom
                sx={{ textAlign: "center" }}
            >Wallet Balance</Typography>
            <Divider />

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>

                <Box sx={{ maxWidth: 300 }}>
                    <Pie data={data}
                        options={options}
                    />
                </Box>
                <Stack justifyContent='space-between'>

                </Stack>

                <Button
                    sx={{
                        textTransform: "none",
                        background: green[600],
                        color: "white",
                        "&:hover": { background: green[700] }
                    }}
                    variant='contained'>
                    Manage Wallet
                </Button>
            </Box>
        </Paper>
    </>);
}
